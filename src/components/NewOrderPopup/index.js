import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import tailwind from "tailwind-rn";
import {AntDesign, Entypo, MaterialIcons} from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const NewOrderPopup = (props) => {

    const onDecline = () => {
        console.log("Something");
    }

    const onAccept = () => {
        console.log("Accept");
    }

    return (
        <>


            <View style={tailwind('bg-black absolute bottom-8 w-96 p-6 rounded-xl flex flex-col justify-center items-center justify-between')}>
                <View style={tailwind("flex")}>
                    <TouchableOpacity onClick={onAccept} activeOpacity={0.8} onPress={onDecline}>
                        <View style={[styles.something, tw`z-50 absolute flex flex-row right-0 bg-black rounded-full px-5 py-2 items-center`]}>
                            <Entypo name="cross" size={24} color="white" />
                            <Text style={tailwind("text-xl text-white")}>Decline</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={tailwind("bg-black flex flex-row")}>
                    <View style={tailwind(" flex flex-row items-center mb-4")}>
                        <View style={tailwind("flex")}>
                            <Text style={tailwind("text-gray-200 text-xl mr-2")}>UberX</Text>
                        </View>
                        <View style={tailwind("flex")}>
                            <View style={styles.userBG}>
                                <MaterialIcons name="account-circle" size={70} color="#276EF1" />
                            </View>
                        </View>
                        <View style={tailwind("flex flex-row items-center")}>
                            <AntDesign name={"star"} size={15} color={"white"} style={tailwind("ml-1")}/>
                            <Text style={tailwind("text-gray-200 text-xl ml-1")}>5.00</Text>
                        </View>
                    </View>
                </View>

                <View style={tailwind("")}>
                    <Text style={tailwind("text-4xl text-gray-200")}>2 min</Text>
                    <Text style={tailwind("text-3xl text-gray-200 mb-4")}>0.3 mi</Text>
                </View>

                <View style={tailwind("flex flex-row items-center")}>
                    <AntDesign name={"star"} color={"white"} style={tailwind("mr-2")}/>
                    <Text style={tailwind("text-gray-200 text-xl")}>Towards your destination</Text>
                </View>
            </View>
        </>
    );
};

export default NewOrderPopup;
