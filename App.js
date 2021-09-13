import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import tailwind from 'tailwind-rn';
import HomeScreen from "./src/screens/HomeScreen";
import NewOrderPopupScreen from "./src/screens/NewOrderPopupScreen";
import {Amplify, Auth, API, graphqlOperation} from "aws-amplify";
import config from "./src/aws-exports";
import {withAuthenticator} from "aws-amplify-react-native";
import graphql from "graphql";
import {getCarId} from "./src/graphql/queries";
// import { withAuthenticator } from 'aws-amplify-react-native';


Amplify.configure(config);

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

                // if not create a new car for the user

            } catch (e) {

            }
        }

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

// today's
