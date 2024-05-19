import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import languageReducer from './reducers/languageSlice';

const languageStore = configureStore({
  reducer: languageReducer,
});

export default languageStore;
