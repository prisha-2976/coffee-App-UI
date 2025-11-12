import { StatusBar, Text, View } from "react-native";
import {useEffect} from "react";
import {useRouter} from "expo-router";
import LottieView from "lottie-react-native";
import cupAnimation from "../assets/Animations/cup.json";


export default function Index() {
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/GetStartedScreen");
        },2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <View className="flex-1 items-center justify-center bg-dkbrown-66">
            <StatusBar barStyle="default"
                       backgroundColor="#000000"
                       translucent={true}
            />
            <View className= " mb-16 items-center justify-center">
            <LottieView
                source={cupAnimation}
                autoPlay
                loop
                style={{width: 150, height: 128}}
            />
                <View className="items-center mb-20">
                    <Text className="text-xl font-light mt-3 text-white-100 font-roboto" >
                        Life Happens, Coffee Helps
                    </Text>
                </View>
           </View>
        </View>
  );
}
