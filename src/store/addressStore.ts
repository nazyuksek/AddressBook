import {combineReducers, configureStore} from '@reduxjs/toolkit';
import addressListSlice from './reducer/addressListSlice';
import {useDispatch} from 'react-redux';

const rootReducer = combineReducers({
  addressList: addressListSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const addressStore = configureStore({
  reducer: rootReducer,
});

export default addressStore;
export type AppDispatch = typeof addressStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
