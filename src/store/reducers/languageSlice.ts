import {createSlice} from '@reduxjs/toolkit';
import {LanguageTag} from '../../types/types';

export type LanguageState = {
  language: LanguageTag;
};

const initialState: LanguageState = {
  language: 'tr',
};

const languageListSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export default languageListSlice.reducer;
export const {changeLanguage} = languageListSlice.actions;
