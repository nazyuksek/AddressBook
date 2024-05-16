import {combineReducers} from '@reduxjs/toolkit';
import addressListSlice from './addressListSlice';

export default combineReducers({
  addresses: addressListSlice,
});
