import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import tailwind from 'tailwind-rn';
import HomeScreen from "./src/screens/HomeScreen";

const App = () => {
  return (
          <View style={tailwind('flex-1')}>

              <HomeScreen />
          </View>
  );
}



export default App;
