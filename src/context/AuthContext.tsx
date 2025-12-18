import React, { createContext, useCallback, useContext, useEffect, useState, ReactNode } from 'react';
import { STORAGE_KEYS, AUTH_CREDENTIALS } from '../utils/constants';
import { getStorageItem, removeStorageItem, setStorageItem } from '../storage/asyncStorage';

type AuthContextValue = {
  isLoggedIn: boolean;
  isAuthLoading: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);

  useEffect(() => {
    const hydrateAuth = async () => {
      const stored = await getStorageItem<boolean>(STORAGE_KEYS.IS_LOGGED_IN);
      if (stored) {
        setIsLoggedIn(true);
      }
      setIsAuthLoading(false);
    };

    hydrateAuth();
  }, []);

  const login = useCallback(async (username: string, password: string): Promise<boolean> => {
    if (username === AUTH_CREDENTIALS.username && password === AUTH_CREDENTIALS.password) {
      setIsLoggedIn(true);
      await setStorageItem(STORAGE_KEYS.IS_LOGGED_IN, true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(async () => {
    setIsLoggedIn(false);
    await removeStorageItem(STORAGE_KEYS.IS_LOGGED_IN);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isAuthLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
};


