import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

export default function App() {
  return (
    <View style={tailwind('flex flex-1 items-center justify-center bg-white')}>
      <Text>UBER Driver app 🔥!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

