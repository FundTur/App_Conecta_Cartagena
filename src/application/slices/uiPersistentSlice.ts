import { createSlice } from '@reduxjs/toolkit';
import { Appearance } from 'react-native';

interface UIStore {
  isDarkMode: boolean;
  language: string;

  isFirstLaunch: boolean;
}

const initialState: UIStore = {
  isDarkMode: Appearance.getColorScheme() === 'dark',
  language: 'en',
  isFirstLaunch: false,
};

const uiSlice = createSlice({
  name: 'uiPersistent',
  initialState,
  reducers: {
    toggleDarkMode: state => {
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    },

    setIsFirstLaunch: (state, action) => {
      return {
        ...state,
        isFirstLaunch: action.payload,
      };
    },

    setLanguage: (state, action) => {
      return {
        ...state,
        language: action.payload,
      };
    },
  },
});

export const { toggleDarkMode, setIsFirstLaunch, setLanguage } = uiSlice.actions;

export default uiSlice.reducer;
