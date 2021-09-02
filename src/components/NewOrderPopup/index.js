import React from 'react';
import {Image, Text, View} from "react-native";
import styles from "./styles";
import tailwind from "tailwind-rn";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";

const NewOrderPopup = () => {
    return (
        <View style={tailwind('z-50 bg-black absolute bottom-8 w-96 p-6 rounded-xl flex flex-col justify-center items-center')}>
            <View style={tailwind("bg-black flex flex-row")}>
                <View style={tailwind(" flex flex-row items-center mb-4")}>
                    <View style={tailwind("flex")}>
                        <Text style={tailwind("text-gray-200 text-xl mr-2")}>UberX</Text>
                    </View>
                    <View style={tailwind("flex")}>
                        <MaterialIcons name="account-circle" size={70} color="#276EF1" />
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
    );
};

export default NewOrderPopup;
