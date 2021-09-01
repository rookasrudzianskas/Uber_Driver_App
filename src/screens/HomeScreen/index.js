import React from 'react';
import {View} from "react-native";
import styles from "./styles";
import tailwind from "tailwind-rn";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

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
                />
            </View>
    );
};

export default HomeScreen;
