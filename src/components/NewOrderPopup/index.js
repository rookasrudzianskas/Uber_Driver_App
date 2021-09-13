import React from 'react';
import {Image, Pressable, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import tailwind from "tailwind-rn";
import {AntDesign, Entypo, MaterialIcons} from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const NewOrderPopup = ({ newOrder, onAccept, onDecline, duration, distance }) => {


    return (
        <>
            <View style={tailwind("absolute top-12 flex flex-row bg-black py-2 px-5 rounded-full left-5")}>
                <TouchableOpacity onPress={onDecline} activeOpacity={0.8}>
                    <View style={tailwind("flex flex-row")}>
                        <Entypo name="cross" size={24} color="white" />
                        <Text style={tailwind("text-xl text-white")}>Decline</Text>
                    </View>
                </TouchableOpacity>
            </View>


            <TouchableOpacity activeOpacity={0.8} onPress={onAccept} style={tailwind('bg-black absolute bottom-8 w-96 p-6 rounded-xl flex flex-col justify-center items-center justify-between')}>
                <View style={tailwind("bg-black flex flex-row")}>
                    <View style={tailwind(" flex flex-row items-center mb-4")}>
                        <View style={tailwind("flex")}>
                            <Text style={tailwind("text-gray-200 text-xl mr-2")}>{newOrder?.type}</Text>
                        </View>
                        <View style={tailwind("flex")}>
                            <View style={styles.userBG}>
                                <MaterialIcons name="account-circle" size={70} color="#276EF1" />
                            </View>
                        </View>
                        <View style={tailwind("flex flex-row items-center")}>

                            <AntDesign name={"star"} size={15} color={"white"} style={tailwind("ml-1")}/>
                            <Text style={tailwind("text-gray-200 text-xl ml-1")}>{newOrder?.user?.rating}</Text>
                        </View>
                    </View>
                </View>

                <View style={tailwind("")}>
                    <Text style={tailwind("text-4xl text-gray-200")}>{duration} min</Text>
                    <Text style={tailwind("text-3xl text-gray-200 mb-4")}>{distance} mi</Text>
                </View>

                <View style={tailwind("flex flex-row items-center")}>
                    <AntDesign name={"star"} color={"white"} style={tailwind("mr-2")}/>
                    <Text style={tailwind("text-gray-200 text-xl")}>Towards your destination</Text>
                </View>
            </TouchableOpacity>
        </>
    );
};

export default NewOrderPopup;
