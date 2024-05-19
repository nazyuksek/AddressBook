import React from 'react';
import {Provider as AddressProvider} from 'react-redux';
import {Provider as LanguageProvider} from 'react-redux';
import RootNavigation from './src/navigation/RootNavigation';
import store from './src/store/store';

const App = () => {
  return (
    <LanguageProvider store={store}>
      <AddressProvider store={store}>
        <RootNavigation />
      </AddressProvider>
    </LanguageProvider>
  );
};

export default App;
