import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import addressListReducer from './reducers/addressListSlice';

const addressStore = configureStore({
  reducer: addressListReducer,
});

export type AppDispatch = typeof addressStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default addressStore;
