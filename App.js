import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import tailwind from 'tailwind-rn';
import HomeScreen from "./src/screens/HomeScreen";
import NewOrderPopupScreen from "./src/screens/NewOrderPopupScreen";
import {Amplify} from "aws-amplify";
import config from "./src/aws-exports";
import {withAuthenticator} from "aws-amplify-react-native";
// import { withAuthenticator } from 'aws-amplify-react-native';


Amplify.configure(config);

const App = () => {
  return (
          <View style={tailwind('flex-1')}>

              <HomeScreen />
              {/*<NewOrderPopupScreen />*/}
          </View>
  );
}



export default withAuthenticator(App);
