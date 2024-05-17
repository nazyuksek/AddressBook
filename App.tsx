import React from 'react';
import {Provider as AddressProvider} from 'react-redux';
import addressStore from './src/store/addressStore';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
  return (
    <AddressProvider store={addressStore}>
      <RootNavigation />
    </AddressProvider>
  );
};

export default App;
