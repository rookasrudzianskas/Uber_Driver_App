import React from 'react';
import {View} from "react-native";
import styles from "./styles";
import tailwind from "tailwind-rn";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_APIKEY = 'AIzaSyBmXijpsVGRk39hnHdg6aWoeZ_Uaj81B';

const HomeScreen = () => {
    return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
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
            </View>
    );
};

export default HomeScreen;
