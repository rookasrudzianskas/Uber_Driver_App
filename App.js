import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

const App = () => {
  return (
    <View style={tailwind('flex flex-1 items-center justify-center bg-white')}>
      <Text style={ tailwind('font-bold')}>UBER Driver app 🔥!</Text>
      <StatusBar style="auto" />
    </View>
  );
}



export default App;
