import React, {createContext, useContext} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import { DarkMode, LightMode } from '../../styles/Themes';
import { toggleDarkMode } from '../../../application/slices/uiPersistentSlice';
import { RootState } from '../../../application/store';

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const ThemeProviderComponent = ({children}: ChildrenProps) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (state: RootState) => state.uiPersistent.isDarkMode,
  );

  console.log('isDarkMode', isDarkMode);

  const toggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  const theme = isDarkMode ? DarkMode : LightMode;

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
