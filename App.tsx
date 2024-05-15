import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Header from './src/components/Header';
import AddressesListScreen from './src/screens/AddressesListScreen/AddressesListScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <Header />
      <AddressesListScreen />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
