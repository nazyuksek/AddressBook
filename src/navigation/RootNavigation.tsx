import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import NavigationStack from './NavigationStack';

const RootNavigation = () => {
  const CustomTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };
  return (
    <NavigationContainer theme={CustomTheme}>
      <NavigationStack />
    </NavigationContainer>
  );
};
export default RootNavigation;
