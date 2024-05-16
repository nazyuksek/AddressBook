import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Header from './src/components/Header';
import NavigationStack from './src/navigation/NavigationStack';
import AddressesListScreen from './src/screens/AddressesListScreen/AddressesListScreen';

const App = () => {
  const CustomTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };
  return (
    <NavigationContainer theme={CustomTheme}>
      <Header />
      <NavigationStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
