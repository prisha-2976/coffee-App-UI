import {Text, Image, View,  TouchableOpacity, StatusBar,} from "react-native";
import {useRouter} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import waveGif from "../assets/Animations/wave gif.json";
import * as Haptics from "expo-haptics";


export default function GetStartedScreen() {
    const router = useRouter();
    return (
        <View className="flex-1" >
            <StatusBar barStyle="default"
                       backgroundColor="#000000"
                       translucent={true}
             />

                <Image
                    source={require("../assets/images/bg11.png")}
                    resizeMode="cover"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%" ,
                        alignSelf: "center"
                }}
                />

            <SafeAreaView style= {{flex: 1, marginTop: 385, justifyContent: "center"}}
            >
                <View style={{  marginLeft:20, flexDirection: "row", alignItems: "center" }}>
                <Text className="  mr-1  mt-60 -mb-4 font-montserrat text-center text-[30px] text-white-100">
                    Welcome
                </Text>
                    <LottieView source={waveGif}
                                         autoPlay
                                         loop
                                         style={{ marginTop:210, width: 50, height: 50}}
                                         />

            </View>
                <Text className=" ml-6 mb-20 font-monsterratMedium font text-left text-[30px] text-white-100">
                    Fresh Brew Awaits you Inside
                </Text>


                <Text className="font-merriweather text-center text-[16px] text-lightyel-80 top-32 pt-5">
                    Where every sip is delightful for you
                </Text>
            <TouchableOpacity className="bg-yellorange-100  mx-8 w-[356px] h-[80px] py-3.5 mb-64 rounded-2xl items-center"
                activeOpacity={0.8}
                onPress={async ()=>{
                    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                router.push("/signup");}}

                              >
                <Text className="text-white-100 text-[32px] font-montserrat">Get Started</Text>
            </TouchableOpacity>
            </SafeAreaView>

            </View>







    );
}