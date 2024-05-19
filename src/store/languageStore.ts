import {configureStore} from '@reduxjs/toolkit';
import languageReducer from './reducers/languageSlice';

// Only used for keeping track of the current language for LanguageSelection component, but can be used for implementing custom localization in the future
const languageStore = configureStore({
  reducer: languageReducer,
});

export default languageStore;
