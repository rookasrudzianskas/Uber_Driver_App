import React, {useEffect, useState} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import tailwind from "tailwind-rn";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {FontAwesome, MaterialCommunityIcons, Octicons} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import tw from "tailwind-react-native-classnames";
import NewOrderPopup from "../../components/NewOrderPopup";
import {API, Auth, graphqlOperation} from "aws-amplify";
import {getCar, listOrders} from "../../graphql/queries";
import {updateCar} from "../../graphql/mutations";


const GOOGLE_MAPS_APIKEY = 'AIzaSyBmXijpsVGRk39hnHdg6aWoeZ_Uaj81B-Y';

const HomeScreen = () => {
    const origin = {latitude: 54.7855097, longitude: 25.3463961};
    const destination = {latitude: 54.7223604, longitude: 25.3022093};
    const windowWidth = Dimensions.get('window').width;
    const [car, setCar] = useState(null);
    const [myPosition, setMyPosition] = useState(null);

    const [order, setOrder] = useState(null);

    const [newOrders, setNewOrders] = useState([]);

    const fetchCar = async () => {
        try {
            const userData = await Auth.currentAuthenticatedUser();
            const carData = await API.graphql(graphqlOperation(getCar, {
                id: userData.attributes.sub
            }))
            // console.log(carData);
            setCar(carData.data.getCar);

        } catch (err) {
            console.log(err);
        }
    }

    const fetchOrders = async () => {
        try {
            const ordersData = await API.graphql(graphqlOperation(listOrders, {
                // filter: { status: { eq: 'NEW' }}
            }));
            // console.log('This is orders data', ordersData);
            setNewOrders((ordersData.data.listOrders.items));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCar();
        fetchOrders();
    }, []);

    const onGo = async () => {
        // update the car and set it to active
        try {
            const userData = await Auth.currentAuthenticatedUser();
            const input = {
                id: userData.attributes.sub,
                isActive: !car.isActive,
            };
            const updatedCarData = await API.graphql(graphqlOperation(updateCar, {
                input: input,
            }));

            // console.log("This is updated car info", updatedCarData.data.updateCar);
            // works
            setCar(updatedCarData.data.updateCar);
        } catch (err) {
            console.log(err);
        }
    }

    const onDecline = () => {
        console.log(newOrders.slice(1));
        setNewOrders(newOrders.slice(1));
    }

    const onAccept = (newOrder) => {
        setOrder(newOrder);
        setNewOrders(newOrders.slice(1));
    }


    const onUserLocationChange = async (event) => {
        // console.log(event.nativeEvent.coordinate);

        // update the car and set it to active

        const { latitude, longitude, heading } = event.nativeEvent.coordinate;
        try {
            const userData = await Auth.currentAuthenticatedUser();
            const input = {
                id: userData.attributes.sub,
                latitude: latitude,
                longitude: longitude,
                heading: heading,
            };
            const updatedCarData = await API.graphql(graphqlOperation(updateCar, {
                input: input,
            }));

            // console.log("This is updated car info", updatedCarData.data.updateCar);
            // works
            setCar(updatedCarData.data.updateCar);
        } catch (err) {
            console.log(err);
        }
    }

    const onDirectionFound = (event) => {
        // console.log("Direction found: ", event);
        if (order) {
            setOrder({
                ...order,
                distance: event.distance,
                duration: event.duration,
                pickedUp: order.pickedUp || event.distance < 0.2,
                isFinished: order.pickedUp && event.distance < 0.2,
            })
        }
    }

    const getDestination = () => {
        if (order && order.pickedUp) {
            return {
                latitude: order.destLatitude,
                longitude: order.destLongitude,
            }
        }
        return {
            latitude: order.originLatitude,
            longitude: order.originLongitude,
        }
    }

    const renderBottomTitle = () => {

        if(order && order.isFinished) {
            return (
                <View style={tailwind("flex flex-col items-center mr-8")}>
                    <View style={tailwind("flex flex-row items-center")}>
                        <View style={tailwind("flex flex-row mx-8 items-center mr-6")}>
                            <Text style={tailwind("text-sm font-bold mr-5")}>{order.duration ? (order.duration).toFixed(0) : '0'} min</Text>
                            <View styles={tailwind("")}>
                                <MaterialIcons name="account-circle" size={20} color="#D44333" />
                            </View>
                            <Text style={tailwind("text-sm font-bold ml-5")}>{order.distance ? (order.distance).toFixed(1) : '0'} km</Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.8}>
                    <Text style={tailwind('text-xl text-white ml-4 bg-red-500 px-5 py-3 mt-2 mr-2 mb-2 font-bold')}>Complete {order?.type || "Uber"} >>></Text>
                    </TouchableOpacity>
                </View>
                // console.log("The render Bottom Title works perfectly");
            )
        }

        if(order && order.distance < 0.2) {
            return (
                <View style={tailwind("flex flex-col items-center mr-8")}>
                    <View style={tailwind("flex flex-row items-center")}>
                        <View style={tailwind("flex flex-row mx-8 items-center mr-6")}>
                            <Text style={tailwind("text-xl font-bold mr-5")}>{order.duration ? (order.duration).toFixed(0) : '0'} min</Text>
                            <View styles={tailwind("")}>
                                <MaterialIcons name="account-circle" size={40} color="#D44333" />
                            </View>
                            <Text style={tailwind("text-xl font-bold ml-5")}>{order.distance ? (order.distance).toFixed(1) : '0'} km</Text>
                        </View>
                    </View>
                    <Text style={tailwind('text-xl font-medium text-gray-800 ml-4')}>Dropping off {order.user.username}</Text>
                </View>
            // console.log("The render Bottom Title works perfectly");
            )
        }

        if(order) {
            return (
                <View style={tailwind("flex flex-col items-center mr-8")}>
                    <View style={tailwind("flex flex-row items-center")}>
                        <View style={tailwind("flex flex-row mx-8 items-center mr-6")}>
                            <Text style={tailwind("text-xl font-bold mr-5")}>{order.duration ? (order.duration).toFixed(0) : '0'} min</Text>
                            <View styles={tailwind("")}>
                                <MaterialIcons name="account-circle" size={40} color="#276EF1" />
                            </View>
                            <Text style={tailwind("text-xl font-bold ml-5")}>{order.distance ? (order.distance).toFixed(1) : '0'} km</Text>
                        </View>
                    </View>
                    <Text style={tailwind('text-xl font-medium text-gray-800 ml-4')}>Picking up {order?.user?.username}</Text>
                </View>
            )
        }

        if(car?.isActive ) {
           return (
                <Text style={tailwind('text-xl font-medium text-gray-800')}>You are online</Text>
           )
        }

          return (<Text style={tailwind('text-xl font-medium text-gray-800')}>You are offline</Text>)
    }

    return (
            <View style={styles.container}>

                <MapView
                    provider={PROVIDER_GOOGLE}
                    onUserLocationChange={onUserLocationChange}
                    initialRegion={{
                        latitude: 54.7855097,
                        longitude: 25.3463961,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}

                    showsUserLocation={true}
                    style={styles.map}
                >
                    {order && (
                    <MapViewDirections
                        origin={{
                            latitude: car?.latitude,
                            longitude: car?.longitude,
                        }}
                        strokeWidth={5}
                        strokeColor={"black"}
                        onReady={onDirectionFound}

                        destination={getDestination()}
                        apikey={GOOGLE_MAPS_APIKEY}
                    />
                    )}
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

                    <TouchableOpacity activeOpacity={0.8} onPress={onGo} style={[styles.roundButton2]}>
                        <Text style={tailwind("text-3xl font-bold text-white")}>
                            {
                                car?.isActive ? 'END' : 'GO'
                            }
                        </Text>
                    </TouchableOpacity>

                    <View activeOpacity={0.8} onPress={() => console.log("Something")} style={[styles.roundButton3, tw`bg-gray-900 px-3 py-2`]}>
                        <Text style={tailwind("text-2xl font-bold text-white")}><Text style={tailwind('text-green-500')}>$</Text>0.00</Text>
                    </View>


                <View style={tailwind('flex h-24 flex-row items-center mb-28 mx-5')}>
                    <View style={tailwind('flex flex-grow')}>
                        <Octicons name="settings" size={27} color="#4a4a4a" />
                    </View>
                    <View style={tailwind('flex flex-grow')}>
                        {renderBottomTitle()}
                    </View>
                    <View style={tailwind('flex')}>
                        <MaterialIcons name="menu-open" size={27} color="#4a4a4a" />
                    </View>
                </View>


                {newOrders.length > 0 && !order && <NewOrderPopup
                    onDecline={onDecline}
                    duration={2}
                    distance={0.5}
                    onAccept={() => onAccept(newOrders[0])}
                    newOrder={newOrders[0]}
                />}

            </View>
    );
};

export default HomeScreen;

// integration with the same amplify project
