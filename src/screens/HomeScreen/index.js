import React, {useState} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import tailwind from "tailwind-rn";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {FontAwesome, MaterialCommunityIcons, Octicons} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import tw from "tailwind-react-native-classnames";

const GOOGLE_MAPS_APIKEY = 'AIzaSyBmXijpsVGRk39hnHdg6aWoeZ_Uaj81B-Y';

const HomeScreen = () => {
    const origin = {latitude: 54.7855097, longitude: 25.3463961};
    const destination = {latitude: 54.7223604, longitude: 25.3022093};
    const windowWidth = Dimensions.get('window').width;
    const [isOnline, setIsOnline] = useState(false);

    return (
            <View style={styles.container}>

                <MapView
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 54.7855097,
                        longitude: 25.3463961,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}

                    showsUserLocation={true}
                    style={styles.map}
                >
                    <MapViewDirections
                        origin={origin}
                        destination={destination}
                        apikey={GOOGLE_MAPS_APIKEY}
                    />
                </MapView>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => console.log("Something")} style={[styles.roundButton, {top: 0, left: 0, marginTop: 45, marginLeft: 30}]}>
                        <MaterialIcons name="menu" size={27} color="#4a4a4a" />
                    </TouchableOpacity>


                    <TouchableOpacity activeOpacity={0.8} onPress={() => console.log("Something")} style={[styles.roundButton, {top: 0, right: 0, marginTop: 45, marginRight: 30}]}>
                        <MaterialIcons name="search" size={26} color="#4a4a4a" />
                    </TouchableOpacity>


                    <TouchableOpacity activeOpacity={0.8} onPress={() => console.log("Something")} style={[styles.roundButton1, {bottom: 0, left: 0, marginBottom: 115, marginLeft: 30}]}>
                        <FontAwesome name="shield" size={27} color="#276EF1" />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => console.log("Something")} style={[styles.roundButton, {bottom: 0, right: 0, marginBottom: 115, marginRight: 30}]}>
                        <MaterialCommunityIcons name="comment-plus" size={24} color="#4a4a4a" />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => console.log("Something")} style={[styles.roundButton2]}>
                        <Text style={tailwind("text-3xl font-bold text-white")}>GO</Text>
                    </TouchableOpacity>

                    <View activeOpacity={0.8} onPress={() => console.log("Something")} style={[styles.roundButton3, tw`bg-gray-900 px-3 py-2`]}>
                        <Text style={tailwind("text-2xl font-bold text-white")}><Text style={tailwind('text-green-500')}>$</Text>0.00</Text>
                    </View>


                <View style={tailwind('flex h-24 flex-row items-center mb-28 mx-5')}>
                    <View style={tailwind('flex flex-grow')}>
                        <Octicons name="settings" size={27} color="#4a4a4a" />
                    </View>
                    <View style={tailwind('flex flex-grow')}>
                        <Text style={tailwind('text-xl font-medium text-gray-800')}>You are offline</Text>
                    </View>
                    <View style={tailwind('flex')}>
                        <MaterialIcons name="menu-open" size={27} color="#4a4a4a" />
                    </View>
                </View>
            </View>
    );
};

export default HomeScreen;
