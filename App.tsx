import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import AddressesListScreen from './src/screens/AddressesListScreen/AddressesListScreen';

const App = () => {
  return (
    <>
      <Header />
      <AddressesListScreen />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
