import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import NavigationStack from './src/navigation/NavigationStack';
import {Provider as AddressProvider} from 'react-redux';
import addressStore from './src/store/addressStore';

const App = () => {
  const CustomTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <AddressProvider store={addressStore}>
      <NavigationContainer theme={CustomTheme}>
        <Header />
        <NavigationStack />
      </NavigationContainer>
    </AddressProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
