import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme, Theme } from '@react-navigation/native';
import { getStorageItem, setStorageItem } from '../storage/asyncStorage';
import { STORAGE_KEYS } from '../utils/constants';
import { darkTheme } from '../theme/dark';
import { lightTheme } from '../theme/light';
import { ThemeColors } from '../theme/colors';

type ThemeContextValue = {
  isDarkMode: boolean;
  colors: ThemeColors;
  navigationTheme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    const hydrateTheme = async () => {
      const stored = await getStorageItem<boolean>(STORAGE_KEYS.IS_DARK_MODE);
      if (stored !== null) {
        setIsDarkMode(stored);
      }
      setIsHydrated(true);
    };

    hydrateTheme();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      void setStorageItem(STORAGE_KEYS.IS_DARK_MODE, next);
      return next;
    });
  };

  const colors = isDarkMode ? darkTheme : lightTheme;

  const navigationTheme: Theme = {
    ...(isDarkMode ? NavigationDarkTheme : NavigationDefaultTheme),
    colors: {
      ...(isDarkMode ? NavigationDarkTheme.colors : NavigationDefaultTheme.colors),
      background: colors.background,
      card: colors.card,
      border: colors.border,
      text: colors.text,
      primary: colors.primary,
    },
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        colors,
        navigationTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return ctx;
};


