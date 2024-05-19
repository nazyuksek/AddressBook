import {createSlice} from '@reduxjs/toolkit';

export type LanguageState = {
  language: 'en' | 'tr';
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
