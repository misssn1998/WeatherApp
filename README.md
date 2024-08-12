<a name="home">Hey guys, below is the structure of the README's contents:</a>

1. [Weather App with React Native Project Introduction](here#ch1)
2. [Installation Guide](here#ch2) </br>
        2.1 [Optional: Install Development Environment](here#ch2.1) </br>
        2.2 [Install Simulator](here#ch2.2) </br>
        2.3 [Steps to Run Weather App](here#ch2.3) </br>
        2.4 [Testing the Application on a Phone](here#ch2.4)
3. [Expo Router and Navigation Introduction](here#ch3)
4. [React Native Basics](here#ch4) </br>
        4.1 [Area, Text, SafeAreaView](here#ch4.1) </br>
        4.2 [Image](here#ch4.2) </br>
        4.3 [ScrollView](here#ch4.3) </br>
        4.4 [TouchableOpacity](here#ch4.4) </br>
        4.5 [React Native state and hook](here#ch4.5)
5. [App walkthrough](here#ch4)
6. [References](here#ref)

**Disclaimer: When running the app, if you see missing images, it's because the app runs very slow.**

# <a name="ch1">Weather App with React Native Project Introduction</a>  
<p>
    React Native and React are both open-sourced frameworks using Javascript and use the same tools such as components, state management, and the virtual DOM, but React Native is used to build native mobile development for IOS/Android instead of web app development like React. While React uses HTML, CSS and Javascript to create interactive user interfaces, React Native uses native UI components and API for mobile apps. This means that your apps will utilize the platform’s (IOS or Android) build-in UI elements and its cross-platform development capabilities, ensuring a seamless user experience and reducing developer’s time to create seperate apps for each flatform.
</p>
<p>
    The demonstration will focus on creating a weather app on IOS using React Native. This weather app will retrieve API from https://www.weatherapi.com/ and display weather information from a single location. It also allows you to obtain weather status from different locations by searching the locations. Following is the prototype of the app:
</p>

<p align='center'>
<img src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/blob/c99e54c321350a5f40e76fcb743dce7cdefc89f1/readme/weather-app%20prototype.png" alt="prototype" width="200"/>
</p>

# <a name="ch2">Installation guide</a>  
## <a name="ch2.1">Optional: Install development environment</a> 
There are 2 development environment for React Native: Expo Go and React Native CLI. In this demo, we will focus on using Expo Go because it’s simply easier for beginner to learn and set up.
For this demo, you don’t have to setup Expo Go from the beginning since it’s already included in the dependencies. However, if you wish to create your own app with Expo tools, simply run this command in terminal:

```

npx create-expo-app
```
Terminal will then ask you to choose a template and name the app. For this tech demo, I chose Blank (Typescript). Next, run this command to start your app:

```

npm install
cd [your-app-name]

#choose one of the below depends on which platform you are creating
npm run android
npm run ios
npm run web
```
<p align='center'>
<img src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/blob/a27c64e9503d1d7660d35c755e377d195b3db139/readme/readme2.png" alt="command" width="700"/>
</p>

For references on how to start react app, please check this link [1]
## <a name="ch2.2">Install simulator</a> 
Depends on which computers you are using, you need to install an app simulator. 
- For MacOs user, install Xcode
- For Window user, install Android studio
#### Install Xcode to run IOS simulator for Mac users
1. Check if Xcode is installed on your Mac:
- You can do so either by searching through the **Applications** directory in the Finder window or by searching for it using Spotlight Search. Use `Command` + `Spacebar` for a shortcut on pulling up the Spotlight Search. If it’s installed, you will find the icon app inside **Applications** and its version number.
2. If Xcode is not installed on your Mac:
- Simply open App Store on your Mac, search for Xcode and install the app.
<p align='center'>
<img src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/blob/a27c64e9503d1d7660d35c755e377d195b3db139/readme/xcode1.png" alt="xcode1" width="600"/>
</p>

3. Launching Xcode:
- The following popup will show on first launch, please make sure you click ‘Install’ to set up additional components that Xcode requires to support running and debugging apps.
<p align='center'>
<img src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/blob/a27c64e9503d1d7660d35c755e377d195b3db139/readme/xcode2.png" alt="xcode2" width="600"/>
</p>

- Enter your Mac password to enable installation
<p align='center'>
<img src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/blob/a27c64e9503d1d7660d35c755e377d195b3db139/readme/xcode3.png" alt="xcode3" width="600"/>
</p>

- The installation will takes time to set up. After installation is done, this dialog will pop up when you open Xcode
<p align='center'>
<img src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/blob/a27c64e9503d1d7660d35c755e377d195b3db139/readme/xocde4.png" alt="xcode4" width="600"/>
</p>

- For references on how to install Xcode on Mac, visit this source [2]

#### Install simulator to run IOS simulator for Window users
1. Download android studio from this link: <a href="https://developer.android.com/studio?gad_source=1&gclid=CjwKCAjw8diwBhAbEiwA7i_sJUm4U-oaMhv3eLB9bZ8WZfA1IuzIvnIK9VjLP-2YzCJ8-r9KDlMo5hoCywcQAvD_BwE&gclsrc=aw.ds">Android Studio Download</a>
2. Before open the project, you should set up simulator for android
- Click on 3-dot simple on top right corner -> choose Virtual Device Manager
<p align='center'>
<img src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/blob/1a188fce1e2c92b23b78acf05d687a84c38c617e/readme/android0.png" alt="xcode4" width="700"/>
</p>

- Click on plus sign to choose simulator
<p align='center'>
<img src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/blob/edfbd6ff6c07bf8922dce1e4763be202703b3486/readme/android2.png" alt="xcode4" width="700"/>
</p>

- Choose a type of phone you prefer (I chose Pixel 8 Pro)
<p align='center'>
<img src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/blob/edfbd6ff6c07bf8922dce1e4763be202703b3486/readme/android3.png" alt="xcode4" width="700"/>
</p>

- Choose a system image (I prefer TiramisuPrivacySandbox)
<p align='center'>
<img src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/blob/edfbd6ff6c07bf8922dce1e4763be202703b3486/readme/android4.png" alt="xcode4" width="700"/>
</p>

- You can set name and choose startup orientation next, then click finish to exit Device Manager
<p align='center'>
<img src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/blob/edfbd6ff6c07bf8922dce1e4763be202703b3486/readme/android5.png" alt="xcode4" width="700"/>
</p>


## <a name="ch2.3">Set up weather app</a> 
1. Clone the repo into your local environment, the Github repo link is: https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998.git
2. Open the file in VScode
3. Open terminal in VSCode and install npm
 - Please remember you only run one of this options based on the computer you are using:
        - npm run ios ⇒ for Macbook user
        - npm run android ⇒ for Window user
</br> **I highly recommend to run this tech demo on Mac as the app was built on Mac**
```
cd [cs732-assignment-misssn1998] #or name of the file you save this repo
npm install 
npm run ios 
npm run android #run this instead of 'npm run ios' if you are using Window computer
```
 - After the command, it might take a while for simulator to pop up. Below is how the app opens after you run the command
<p float="left" align="center">
  <img src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/blob/c99e54c321350a5f40e76fcb743dce7cdefc89f1/readme/command1.png" width="400" title="ios"/>
  <img src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/blob/db376eba5617a8ab500f683334c4a4b03394d6c7/readme/android%20screenshot.png " width="400" title="android" /> 
</p>
  

## <a name="ch2.4">How to test application on phone</a> 
1. Download Expo Go app:
    - For Android user, download Expo Go from Android Store https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US
    - For IOS user, download Expo Go from App Store https://apps.apple.com/us/app/expo-go/id982107779
2. Open project folder in Vscode, run the command below in terminal (please make sure to run npm install before doing this)
```

npm run ios #run this if using iphone
npm run android #run this if using android phone
```
3. A QR code will show up after the command run successfully
<p align='center'>
<img src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/blob/c99e54c321350a5f40e76fcb743dce7cdefc89f1/readme/QR.png" alt="QR" width="700"/>
</p>

5. Scan QR code using Expo Go (Android) or the Camera App (IOS)

# <a name="ch3">Expo router and navigation introduction</a>  
**Please note: className is for Tailwind CSS. CSS will not be gone through in this tutorial.** </br>
Expo router is file-based router which means all the code needs to be inside a main folder (for this app the main folder is ‘app’. Inside app folder, there is index.jsx file which serves as the initial route in the directory, for example, this file can be a welcome screen by default or a homepage when open the app. There is another file called [creator].jsx inside users folder, which is to show creator information. 
To navigate to user page, we can use Link component from react native to link index.jsx to [creator].jsx. After clicking on the link,  we will be direct to user page.
```

import { View, Text} from "react-native";
		
<View>
        <Text>Home Page</Text>
        <Link href="/users/1">
		<UserCircleIcon color="black" size={30}/>
	</Link>
</View>
```
However, there is no way to go back to homepage from user page. To solve this problem, a file called _layout.jsx was created. Inside this file, we can make use of Stack layout and Stack.screen from expo router, which wraps the native stack navigator from react navigation. Stack will create a back button for users to navigate back to main page (in this case is to navigate back to index.jsx) and add some animations during transition. 
- <Stack.Screen name={routeName} /> component will statically configure screen options. [3]. Please make sure routeName matches the file name

```
const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="users/[creator]" options={{headerTitle: "Creator"}} />
    </Stack>
  );
};
```
- options is used to configure the transition animation or screens. For example, headerShown:false was used to remove header on top of screen.
<p float="left">
<em>With header</em>
  <img src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/blob/c99e54c321350a5f40e76fcb743dce7cdefc89f1/readme/stack1.png" width="300" title="with header"/>
<em>No header</em>
  <img src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/blob/c99e54c321350a5f40e76fcb743dce7cdefc89f1/readme/stack2.png " width="300" title="no header" /> 
</p>

**Please note that creator page was created last, so some part of video will not shown this page.**

# <a name="ch4">React Native Basics</a>  
## <a name="ch4.1">View, Text, SafeAreaView</a> 
**View** is the most basic UI component in React Native. View is a container that supports layout with flexbox, style,..etc. You can think that View is similar to <div> in React in which they can be nested inside other views and can have 0 to many children of any type [4]. In weather-app, we can see that multiple smaller <View> are nested inside a big <View> to display different sections on main screen. 
```

const index = () => {
        return (
                {/* search bar */}
	        <View>{search bar logic code}</View>

	        {/* city weather section */}
	        <View>{location name, country}</View>
	        <View>{weather image}</View>
                <View>{degree celcius}</View>
)}
```
**Text** is a React component for displaying text [5].
```

     import { View, Text} from "react-native";
     
     {/* city weather section */}
          <View className="mx-4 flex justify-around flex-1 mb-2 -z-40">
            {/* location */}
            <Text className="text-black text-center text-2xl font-bold">
              {location?.name},
              <Text className="text-lg font-semibold text-black">
                {" " + location?.country}
              </Text>
            </Text>
          </View>
```
**SafeAreaView** is to render content within the safe area boundaries of a device. It automatically applies padding so that contents are not covered by camera notches or rounded corners. It is only applicable to IOS devices [6]. In the example below, <SafeAreaView> is rendered to display loading circle indicator. 
**Please note: for final code, I have changed all SafeAreaView into View becuase SafeAreaView will not work for Android. I still talk about this in the video, but final code will not contain any SafeAreaView.**
```

<SafeAreaView className="flex-1 flex-row justify-center items-center">
   <Progress.CircleSnail color="blue" thickness={10} size={150} />
</SafeAreaView>
```

## <a name="ch4.2">Image</a> 
React Native has its own way of managing image[7]. To add a static image, place image link inside source code like below:
```

import { Image} from "react-native";

<Image source={require('./my-icon.png')} />
```
In my weather app, all the image links are matched according to location’s weather condition. For example, if condition is “Sunny”, the image will match with “sunny.png”. All weather links are stored in images.js file. The code below is how I link <Image> in index.jsx with images file. 
- condition?.text refers to weather condition of location (ex: Sunny, Partly Cloudy, ..etc)

## <a name="ch4.3">ScrollView</a> 
ScrollView is a scrolling container that can contain multiple components and views. The scrolling can be vertically or horizontally[8]. The example below explain how to display hour weather of a single location and allows horizontal scrolling on the hours using ScrollView. We can customize the ScrollView with adding some options such as:
- horizontal = to indicate scrolling should be from left to right or vice versa
- contentContainerStyle = to add some padding on the side
- showsHorizontalScrollIndicator = when true, shows a horizontal scroll indicator
```

import { ScrollView} from "react-native";   		
{/* hourly weather */}
        <View className="space-y-3 mt-10">
              <ScrollView
                horizontal
                contentContainerStyle={{ paddingHorizontal: 15 }}
                showsHorizontalScrollIndicator={false}
              >
                {some code logic}
              </ScrollView>
        </View>
```

## <a name="ch4.4">TouchableOpacity</a> 
This component fades out when pressed, and fades back in when released. It’s also can be customized [9]. In the example code below, the icon will fade in and out every time user clicks and releases it.
```

import { TouchableOpacity} from "react-native";
  
<View>
  <TouchableOpacity className="bg-slate-600 rounded-full p-3 m-1" 
  onPress={() => setSearch(!search)}>
	    <MagnifyingGlassIcon color="white" />
  </TouchableOpacity>
</View>
```

## <a name="ch4.5">React Native state and hook</a>
React native state and hook share lots of similarity with React’s state and hooks.
- useState hook = both react and react native use the useState hook from react library to manage component state. This hook allows you to create state variables within functional components, enabling stateful behavior.
- State management = both react and react native state serve the same purpose: to store and update data within components that can change over time, triggering re-renders when necessary.
In example below, handleSearch function helps to store weather data of location that users are searching for. After fetching data from fetchSearch, the data returned will be store inside setLocations
```
  const [search, setSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  
  
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
```
- useEffect hook = both react and react native share the same functionality of useEffect hook, which to perform side effects within functional components.

In example below, the useEffect runs once when component mounts. It calls the ‘fetchHomeWeather’ function to fetch weather data for a default location, which is Auckland, upon component initialization. Upon successful fetching, it also sets weather state with the fetched data using the setWeather function. it also set loading to false to indicate that data loading has finished
```
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
```

# <a name="ch5">App Walkthrough</a>  
The codebase starts by importing necessary components and libraries

The core of the component is the functional component named index. This component will be responsible for rendering the entire weather app UI . The code contains 4 state variables which utilize useState hook (this is similar to React)
- search = boolean value to control the visibility of search bar (true for visible, false for hidden)
- locations = array to store fetched location suggestions from the search
- weather = object to store the fetched weather data for the current location
- loading = boolean value to indicate if weather data is currently being fetched (true for loading, false means loading is done)
<img width="359" alt="Screenshot 2024-04-14 at 4 49 25 PM" src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/assets/92246768/48ee18cd-5c8f-44b4-84ea-2706bba1fef2">
<br/>
handleSearch, handleLocations are two important functions to retrieve search results and weather data from locations.
<img width="548" alt="Screenshot 2024-04-14 at 4 54 09 PM" src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/assets/92246768/de2421a5-f942-4fcb-b6d7-799cc91b95a5">
<br/>
useEffect hook and fetchHomeWeather() are use to render a default location (in this case is Auckland) when app opens. This useEffect hook runs once when the component mounts.
It calls the ‘fetchHomeWeather’ function to fetch weather data for a default location, which is Auckland, upon component initialization <br/>
<img width="364" alt="Screenshot 2024-04-14 at 4 55 26 PM" src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/assets/92246768/01663e40-ecc1-4b97-8d71-8a62074c0294">
<br/>
The component will display a loading indication while the weather data is being fetched. Once the data is loaded, the component will display various weather details for selected location. When the search state is true, the search bar will be displayed next to the icon. I am using another react native component called **textInput** which is foundational component for inputing text into the app via a keyboard. **onChangeText** is used to read user input, in here onChangeText actually calls handleSearch function, this function only returns results if the value is more than 2 characters. I also using another react component called **TouchableOpacity** for the search icon. TouchableOpacity is a wrapper for making views respond properly to touch. which mean that when you press down, the opacity of the wrapped view is decreased. </br>
<img width="686" alt="Screenshot 2024-04-14 at 4 58 09 PM" src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/assets/92246768/2a01bf20-47fe-42a8-b1fd-d9df82ddf22d"> <br/>

Hourly weather data uses mapping through array to retrieve weather in each hour. The key part here is the map function iterating through this **weather?.forecast?.forecastday[0]?.hour** array. This array contains objects for each hour in the forecast for the current day ([0]). Inside the `map` function, I am working with each hourly object (`item`).
I'm also using an index (`index`) to provide unique keys for each element within the list. The next part also involve some logic to hightlight current time data, in which if it's currently, the text will be change to "Now" and style as bold font. I grab the current local time (`location?.localtime`) from the weather data. I split it to extract the hour (`split(" ")[1]`) and then further split to get the numeric hour (`split(":")[0]`). I handle the case where the hour might be "0" by converting it to "00" for consistency. Then, I perform similar logic on the `time` property of the current hourly object (`item`). Finally, I compare the extracted hour values (`localTime` and `timeSplit`) to see if they match. If they do, it means this is the data for the current hour. Based on this comparison (`isCurrentTime`), I conditionally apply styles to the time text in the JSX. 
<img width="722" alt="Screenshot 2024-04-14 at 5 23 03 PM" src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/assets/92246768/56cb4326-18ac-461c-8b86-258bd4e1ef9b"> <br/>

The rest of the code is used for displaying weather data information retrieved from API. For example, if we need to retrieve sunrise time, from the API, we can retrieve forecast, then first item of forecastday, then get astro, and finally get sunrise. 
<img width="873" alt="Screenshot 2024-04-14 at 5 15 51 PM" src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-misssn1998/assets/92246768/17ca8b2e-9708-4ad3-acd4-72591fcadc15">

[Home](#home)


# <a name="ch6">Refererences</a>  
[1] https://www.youtube.com/watch?v=y6DwGxe2E_k

[2] https://www.codecademy.com/article/installing-and-setting-up-xcode

[3] https://docs.expo.dev/router/advanced/stack/

[4] https://reactnative.dev/docs/view

[5] https://reactnative.dev/docs/text

[6] https://reactnative.dev/docs/safeareaview

[7] https://reactnative.dev/docs/images

[8] https://reactnative.dev/docs/using-a-scrollview

[9] https://reactnative.dev/docs/touchableopacity
