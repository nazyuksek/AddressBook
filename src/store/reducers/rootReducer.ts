import {combineReducers} from '@reduxjs/toolkit';
import addressListSlice from './addressListSlice';
import languageSlice from './languageSlice';

export const rootReducer = combineReducers({
  addressList: addressListSlice,
  language: languageSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
