import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import tailwind from 'tailwind-rn';
import HomeScreen from "./src/screens/HomeScreen";
import NewOrderPopupScreen from "./src/screens/NewOrderPopupScreen";
import {Amplify, Auth, API, graphqlOperation} from "aws-amplify";
import config from "./src/aws-exports";
import {withAuthenticator} from "aws-amplify-react-native";
import {getCarId} from "./src/graphql/queries";
import {createCar} from "./src/graphql/mutations";
// import { withAuthenticator } from 'aws-amplify-react-native';


Amplify.configure({
    ...config,
    Analytics: {
        disabled: true,
    },
});

const App = () => {

    useEffect(() =>  {
        const updateUserCar = async () => {
            try {
                // get authenticated user
                    const authenticatedUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
                // check if user has a car
                    if(!authenticatedUser) {
                        return;
                    }

                    const carData = await API.graphql(graphqlOperation(getCarId, {
                        id: authenticatedUser.attributes.sub
                    }))

                // console.log("This is car", carData);
                    if(!!carData.data.getCar) {
                        console.log('user already has a car assigned');
                        return;
                    }
                // if not create a new car for the user

                    const newCar = {
                        id: authenticatedUser.attributes.sub,
                        type: 'UberX',
                        userId: authenticatedUser.attributes.sub,
                    }

                    await API.graphql(graphqlOperation(createCar, {
                        input: newCar,
                    }))

            } catch (e) {
                console.log(e);
            //    new shit
            }
        };

        updateUserCar();

    }, []);


  return (
          <View style={tailwind('flex-1')}>

              <HomeScreen />
              {/*<NewOrderPopupScreen />*/}
          </View>
  );
}



export default withAuthenticator(App);
