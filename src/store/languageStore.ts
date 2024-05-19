import {configureStore} from '@reduxjs/toolkit';
import languageReducer from './reducers/languageSlice';

const languageStore = configureStore({
  reducer: languageReducer,
});

export default languageStore;
