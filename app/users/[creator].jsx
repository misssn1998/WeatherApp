import React from "react";
import { View, Text, Image } from "react-native";

const UserPage = () => {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Image
        source={require("../../assets/meme.gif")}
        className="mb-10"
      />
      <Text>Hi! This app is created by S.N</Text>
    </View>
  );
};

export default UserPage;
