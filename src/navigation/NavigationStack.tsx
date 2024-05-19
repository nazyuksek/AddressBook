import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from '../constants/Screens';
import * as ScreenComponents from '../screens';
import Header from '../components/Header/Header';

const Stack = createStackNavigator();

const NavigationStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => <Header />}}>
      <Stack.Group>
        <Stack.Screen
          name={Screens.ADDRESSES_LIST}
          component={ScreenComponents.AddressesListScreen}
        />
        <Stack.Screen
          name={Screens.ADD_NEW_ADDRESS}
          component={ScreenComponents.AddNewAddressScreen}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          animationEnabled: true,
          headerShown: false,
        }}>
        <Stack.Screen
          name={Screens.SUCCESS_MODAL}
          component={ScreenComponents.SuccessModalScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default NavigationStack;
