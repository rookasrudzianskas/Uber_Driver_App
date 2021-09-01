import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import tailwind from 'tailwind-rn';
import HomeScreen from "./src/screens/HomeScreen";

const App = () => {
  return (
      <SafeAreaView style={tailwind('h-full')}>
          <View style={tailwind('items-center')}>

              <HomeScreen />
          </View>
      </SafeAreaView>
  );
}



export default App;
