import React from 'react';
import {Text, View} from "react-native";
import styles from "./styles";
import tailwind from "tailwind-rn";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBmXijpsVGRk39hnHdg6aWoeZ_Uaj81B-Y';

const HomeScreen = () => {
    const origin = {latitude: 54.7855097, longitude: 25.3463961};
    const destination = {latitude: 54.7223604, longitude: 25.3022093};

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

                <View style={tailwind('flex h-24 flex-row items-center mb-24 mx-5')}>
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
