import {
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import Header from '../components/Header';
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
      <Header />
      <NavigationStack />
    </NavigationContainer>
  );
};
export default RootNavigation;
