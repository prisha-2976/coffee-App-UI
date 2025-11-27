import {useRouter} from "expo-router";
import {View, Text, TouchableOpacity, TextInput, Image} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import Signup from "@/assets/Animations/sign up.json";
import {StatusBar} from "react-native";
import { useIsFocused } from '@react-navigation/native';








export default function signup() {
    const router = useRouter();
    const isFocused = useIsFocused();
    return (
        <>
            {isFocused && <StatusBar barStyle="light-content" />}

            <View className="flex-1 bg-amber-50">
                <SafeAreaView className= "flex">
                    <View className="flex-row justify-start">
                        <TouchableOpacity onPress={() => router.back()}
                                          className="bg-yellow-950 p-4 rounded-tr-2xl rounded-bl-2xl ml-4">
                            <Ionicons name="arrow-back" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View className= " flex-row justify-center">
                        <LottieView
                            source={Signup}
                            autoPlay
                            loop
                            style={{width: 200, height: 245}}
                        />
                    </View>
                </SafeAreaView>
                <View className="flex-1 bg-indigo-300 px-8 pt-2 "
                      style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} >
                    <View className="form space-y-1 ">
                        <Text className="text-gray-700 ml-4 mb-2">Full Name</Text>
                        <TextInput
                            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-4"
                            value="Rosie Sane"
                            placeholder='Enter Your Full Name'
                        />
                        <Text className="text-gray-700 ml-4 mb-2">Email Address</Text>
                        <TextInput
                            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-4"
                            value="Sane@gmail.com"
                            placeholder='Enter Your Email Address'
                        />
                        <Text className="text-gray-700 ml-4 mb-2">Password</Text>
                        <TextInput
                            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-4"
                            secureTextEntry={true}
                            value="test12345"
                            placeholder='Enter Your Password'
                        />

                        <TouchableOpacity
                            className="py-5 bg-amber-400 rounded-2xl mb-1"
                        >
                            <Text className="font-xl font-bold text-center text-gray-700">
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text className="text-xl text-gray-700 font-bold text-center py-3">
                        Or
                    </Text>
                    <View className="flex-row justify-center">
                        <TouchableOpacity className="p-2 border-gray-100 rounded-2xl">
                            <Image source={require("../assets/images/google-logo.png")}
                                   className="w-12 h-14" />
                        </TouchableOpacity>
                        <TouchableOpacity className="p-2 border-gray-100 rounded-2xl">
                            <Image source={require("../assets/images/apple.png")}
                                   className="w-16 h-16" />
                        </TouchableOpacity>
                        <TouchableOpacity className="p-2 border-gray-100 rounded-2xl">
                            <Image source={require("../assets/images/facebook1.png")}
                                   className="w-14 h-14" />
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row justify-center mt-7">
                        <Text className="text-gray-700 font-semibold">Alerady have an account?</Text>
                        <TouchableOpacity onPress={() => router.push("/login")}>
                            <Text className="font-semibold text-lightyel-80"> Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </>
    );
}