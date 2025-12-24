import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme, Theme } from '@react-navigation/native';
import { getStorageItem, setStorageItem } from '../storage/asyncStorage';
import { STORAGE_KEYS } from '../utils/constants';
import { darkTheme } from '../theme/dark';
import { lightTheme } from '../theme/light';
import { ThemeColors, baseColors } from '../theme/colors';
import { fetchThemeOverrides } from '../utils/fakeThemeServer';

type ThemeContextValue = {
  isDarkMode: boolean;
  colors: ThemeColors;
  navigationTheme: Theme;
  toggleTheme: () => void;
  //runtime updates to base color overrides
  updateBaseOverrides: (o: Partial<typeof baseColors>) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
  initialBaseOverrides?: Partial<typeof baseColors>;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, initialBaseOverrides }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const [baseOverrides, setBaseOverrides] = useState<Partial<typeof baseColors> | undefined>(initialBaseOverrides);

  useEffect(() => {
    const hydrateTheme = async () => {
      const stored = await getStorageItem<boolean>(STORAGE_KEYS.IS_DARK_MODE);
      if (stored !== null) {
        setIsDarkMode(stored);
      }

      // hydrate any saved accent color (orange override)
      const storedAccent = await getStorageItem<string>(STORAGE_KEYS.ACCENT_COLOR);
      if (storedAccent !== null) {
        setBaseOverrides(prev => ({ ...(prev ?? {}), orange: storedAccent }));
      }

      setIsHydrated(true);
    };

    hydrateTheme();
  }, []);

  useEffect(() => {
    let mounted = true;
    const loadOverrides = async () => {
      try {
        const server = await fetchThemeOverrides();
        if (!mounted) return;

        const filtered = { ...(server ?? {}) };
        if ((filtered as any).orange !== undefined) {
          delete (filtered as any).orange;
        }

        setBaseOverrides(prev => ({ ...(prev ?? {}), ...filtered }));
      } catch {
        // ignore
      }
    };
    loadOverrides();
    return () => {
      mounted = false;
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      setStorageItem(STORAGE_KEYS.IS_DARK_MODE, next).catch(() => {});
      return next;
    });
  };

  // Helper that replaces values in a theme template that originally came from baseColors
  const applyBaseOverrides = (themeTemplate: ThemeColors): ThemeColors => {
    const patched: ThemeColors = { ...themeTemplate };

    (Object.keys(baseColors) as Array<keyof typeof baseColors>).forEach((key) => {
      const originalValue = (baseColors as any)[key];
      const overrideValue = baseOverrides && (baseOverrides as any)[key];
      if (overrideValue && overrideValue !== originalValue) {
        (Object.keys(patched) as Array<keyof ThemeColors>).forEach(field => {
          if ((patched as any)[field] === originalValue) {
            (patched as any)[field] = overrideValue;
          }
        });
      }
    });

    return patched;
  };

  const templateColors = isDarkMode ? darkTheme : lightTheme;
  const colors = baseOverrides ? applyBaseOverrides(templateColors) : templateColors;

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
        updateBaseOverrides: (o: Partial<typeof baseColors>) => {
          setBaseOverrides(prev => {
            const next = ({ ...(prev ?? {}), ...o });
            // persist accent color selection when provided
            if (o.orange !== undefined) {
              setStorageItem(STORAGE_KEYS.ACCENT_COLOR, o.orange).catch(() => {});
            }
            return next;
          });
        },
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


