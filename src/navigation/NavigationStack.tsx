import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from '../constants/Screens';
import * as ScreenComponents from '../screens';

const Stack = createStackNavigator();

const NavigationStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={Screens.ADDRESSES_LIST}
        component={ScreenComponents.AddressesListScreen}
      />
      <Stack.Screen
        name={Screens.ADD_NEW_ADDRESS}
        component={ScreenComponents.AddNewAddressScreen}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
