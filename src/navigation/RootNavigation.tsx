import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Header from '../components/Header/Header';
import NavigationStack from './NavigationStack';

const RootNavigation = () => {
  const CustomTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };
  return (
    <NavigationContainer theme={CustomTheme}>
      <NavigationStack />
    </NavigationContainer>
  );
};
export default RootNavigation;
