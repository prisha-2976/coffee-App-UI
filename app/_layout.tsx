import {SplashScreen, Stack } from "expo-router";
import './global.css';
// import {useFonts} from "@expo-google-fonts/roboto";
import {useFonts} from 'expo-font'
import {useEffect} from "react";


export default function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        "Roboto-Medium" : require('../assets/fonts/Roboto-Medium.ttf'),
        "Montserrat-Bold" : require('../assets/fonts/Montserrat-Bold.ttf'),
        "Montserrat-light" : require('../assets/fonts/Montserrat-Light.ttf'),
        "Montserrat-medium" : require('../assets/fonts/Montserrat-Medium.ttf'),
        "Meeriweather-Light" : require('../assets/fonts/Merriweather_24pt-Light.ttf'),
        "Roboto-Light" : require('../assets/fonts/Roboto-Light.ttf'),
        "Roboto_SemiCondensed-Light" : require('../assets/fonts/Roboto_SemiCondensed-Light.ttf'),


    });

    useEffect(() => {
        if(error) throw error;
        if(fontsLoaded) SplashScreen.hideAsync();
        }, [fontsLoaded, error]);
  return <Stack screenOptions={{ headerShown: false }} />;
}
