import React, { useEffect, useState } from "react";
import { Link } from "expo-router";

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "react-native";

import {
  MagnifyingGlassIcon,
  InformationCircleIcon,
  UserCircleIcon
} from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";

import { fetchForecast, fetchSearch } from "../api/weather";

import { images } from "./images";

import * as Progress from "react-native-progress";

const index = () => {
  const [search, setSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  //handle locations
  async function handleLocations(loc) {
    try {
      console.log("location: ", loc);
      setLocations([]); //remove location after pressing the search button
      setSearch(false); // remove search bar after press search
      const data = await fetchForecast({
        cityName: loc.name,
        days: "1",
      });
      setWeather(data);
      console.log("forecast: ", data);
    } catch (error) {
      console.log(error);
    }
  }

  //handle search functionality
  async function handleSearch(value) {
    //fetch locations
    if (value.length > 2) {
      //returns only if search term is more than 2 characters
      try {
        const data = await fetchSearch({ cityName: value });
        setLocations(data);
      } catch (error) {
        console.log("error fetching: ", error);
      }
    }
  }

  //fetch forecast for default location: Auckland
  useEffect(() => {
    fetchHomeWeather();
  }, []);

  //fetch Auckland forecast only
  async function fetchHomeWeather() {
    try {
      const data = await fetchForecast({
        cityName: "Auckland",
        days: "1",
      });
      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const { current, location, forecast } = weather;

  return (
    <View className="flex-1 relative bg-white">
      <StatusBar hidden />

      <View className="mt-10 ml-5 ">
        <Link href="/users/1" className="underline">
          <UserCircleIcon color="black" size={30}/>
        </Link>
      </View>


      {loading ? (
        <View className="flex-1 flex-row justify-center items-center">
          <Progress.CircleSnail color="blue" thickness={10} size={150} />
        </View>
      ) : (
        <View className="flex flex-1 mt-2">

          {/* search bar */}
          <View className="mx-4 relative z-100">
            <View
              className="flex-row justify-end items-center rounded-full"
              style={{
                backgroundColor: search ? "rgb(203 213 225)" : "transparent",
              }}
            >
              {search ? (
                <TextInput
                  onChangeText={handleSearch}
                  placeholder="Search city"
                  placeholderTextColor={"black"}
                  className="pl-6 h-10  flex-1 text-base"
                />
              ) : null}
              <TouchableOpacity
                className="bg-slate-600 rounded-full p-3 m-1"
                onPress={() => setSearch(!search)}
              >
                <MagnifyingGlassIcon color="white" />
              </TouchableOpacity>
            </View>
            {locations.length > 0 && search ? (
              <View className="absolute w-full bg-slate-100 top-16 rounded-3xl">
                {locations.map((loc, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      className={
                        "flex-row items-center border-0 p-3 px-4 mb-1 rounded-lg" 
                      }
                      onPress={() => handleLocations(loc)}
                    >
                      <MapPinIcon size="20" color="gray" />
                      <Text className="text-black text-base ml-2">
                        {loc?.name}, {loc?.country}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </View>

          {/* city weather section */}
          <View className="mx-4 flex justify-around flex-1 mb-2 -z-40">
            {/* location */}
            <Text className="text-black text-center text-2xl font-bold">
              {location?.name},
              <Text className="text-lg font-semibold text-black">
                {" " + location?.country}
              </Text>
            </Text>

            {/* weather image */}
            <View className="flex-row justify-center mt-8">
              <Image
                // source={require("link-of-image")}
                source={images[current?.condition?.text]}
                className="w-48 h-48 mb-8"
              />
            </View>

            {/* degree celcius */}
            <View className="space-y-2 flex justify-normal items-center ">
              <Text className="text-center font-bold text-black text-6xl  ml-5">
                {current?.temp_c}&#176;C
              </Text>
              <Text className="text-center text-black tracking-widest text-xl">
                {current?.condition?.text}
              </Text>
              <Text className="pl-5 text-center text-black tracking-widest text-xl">
                L:{forecast?.forecastday[0]?.day?.mintemp_c}&#176;, H:
                {forecast?.forecastday[0]?.day?.maxtemp_c}&#176;
              </Text>
            </View>

            {/* hourly weather */}
            <View className="space-y-3 mt-4">
              <ScrollView
                horizontal
                contentContainerStyle={{ paddingHorizontal: 15 }}
                showsHorizontalScrollIndicator={false}
              >
                {weather?.forecast?.forecastday[0]?.hour?.map((item, index) => {
                  let localTime = location?.localtime //get current hour of current location
                    ?.split(" ")[1]
                    ?.split(":")[0];
                  localTime = localTime === "0" ? "00" : localTime;
                  // console.log("local time: ", localTime);

                  const time = item.time.split(" ")[1];
                  const timeSplit = time?.split(":")[0];
                  // console.log(timeSplit);

                  const isCurrentTime = timeSplit === localTime;
                  // console.log(isCurrentTime);

                  return (
                    <View
                      key={index}
                      className="flex justify-center items-center w-20 rounded-3xl py-3 space-y-1 mr-4"
                    >
                      <Text
                        className={`text-gray-600 ${
                          isCurrentTime ? "text-gray text-base font-bold" : ""
                        }`}
                      >
                        {isCurrentTime ? "Now" : time}
                      </Text>
                      <Image
                        source={images[item?.condition?.text]}
                        className="h-10 w-10"
                      />
                      <Text className="text-gray-600 text-base font-semibold">
                        {item?.temp_c}&#176;C
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>

            {/* extra information  */}
            <View>

              <View className="flex-row items-center mx-5 space-x-2 mb-5">
                <InformationCircleIcon size="22" color="black" />
                <Text className="text-black text-base">Daily forecast</Text>
              </View>

              <ScrollView
                horizontal
                contentContainerStyle={{ paddingHorizontal: 15 }}
                showsHorizontalScrollIndicator={false}
              >
                {/* Sunrise */}
                <View className="flex justify-center items-center w-28 h-40 rounded-3xl space-y-4 mr-4 bg-slate-200 opacity-100">
                  <Image
                    source={require("../assets/weathers/sunrise.png")}
                    className="h-10 w-10"
                  />
                  <Text className="text-gray-600">Sunrise</Text>
                  <Text className="text-xl font-semibold text-gray-600">
                    {forecast?.forecastday[0]?.astro?.sunrise}
                  </Text>
                </View>

                {/* Sunset */}
                <View className="flex justify-center items-center w-28 h-40 rounded-3xl space-y-4 mr-4 bg-slate-200 opacity-100">
                  <Image
                    source={require("../assets/weathers/sunset.png")}
                    className="h-10 w-10"
                  />
                  <Text className="text-gray-600">Sunset</Text>
                  <Text className="text-xl font-semibold text-gray-600">
                    {forecast?.forecastday[0]?.astro?.sunset}
                  </Text>
                </View>

                {/* Chance of rain */}
                <View className="flex justify-center items-center w-28 h-40 rounded-3xl space-y-4 mr-4 bg-slate-200 opacity-100">
                  <Image
                    source={require("../assets/weathers/rain.png")}
                    className="h-10 w-10"
                  />
                  <Text className="text-gray-600">Chance of rain</Text>
                  <Text className="text-xl font-semibold text-gray-600">
                    {forecast?.forecastday[0]?.day?.daily_chance_of_rain}%
                  </Text>
                </View>

                {/* Humidity */}
                <View className="flex justify-center items-center w-28 h-40 rounded-3xl space-y-4 mr-4 bg-slate-200 opacity-100">
                  <Image
                    source={require("../assets/weathers/thermometer.png")}
                    className="h-10 w-10"
                  />
                  <Text className="text-gray-600">Humidity</Text>
                  <Text className="text-xl font-semibold text-gray-600">
                    {current?.humidity}%
                  </Text>
                </View>

                {/* UV */}
                <View className="flex justify-center items-center w-28 h-40 rounded-3xl space-y-4 mr-4 bg-slate-200 opacity-100">
                  <Image
                    source={require("../assets/weathers/uv.png")}
                    className="h-10 w-10"
                  />
                  <Text className="text-gray-600">UV index</Text>
                  <Text className="text-xl font-semibold text-gray-600">
                    {current?.uv}
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default index;
