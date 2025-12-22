import React, { createContext, useCallback, useContext, useEffect, useState, ReactNode } from 'react';
import { STORAGE_KEYS } from '../utils/constants';
import { getStorageItem, removeStorageItem, setStorageItem } from '../storage/asyncStorage';
import { useLoginMutation } from '../hooks/mutations/useLogin';
import apolloClient from '../apollo/client';
import { LoginResponse } from '../graphql/generated/types';

type AuthContextValue = {
  isLoggedIn: boolean;
  isAuthLoading: boolean;
  loginWithCredentials: (username: string, password: string) => Promise<boolean>;
  setAuthState: (loginData: LoginResponse) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);
  const { mutate } = useLoginMutation();

  useEffect(() => {
    const hydrateAuth = async () => {
      // Check for an access token first
      const token = await getStorageItem<string>(STORAGE_KEYS.ACCESS_TOKEN);
      if (token) {
        setIsLoggedIn(true);
      }
      setIsAuthLoading(false);
    };

    hydrateAuth();
  }, []);

  const setAuthState = useCallback(async (loginData: LoginResponse) => {
    if (loginData && loginData.accessToken) {
      await setStorageItem(STORAGE_KEYS.ACCESS_TOKEN, loginData.accessToken);
      if (loginData.refreshToken) {
        await setStorageItem(STORAGE_KEYS.REFRESH_TOKEN, loginData.refreshToken);
      }
      await setStorageItem(STORAGE_KEYS.IS_LOGGED_IN, true);
      setIsLoggedIn(true);

      // Optionally clear and refetch store to ensure auth-aware requests use the new token
      try {
        await apolloClient.clearStore();
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const loginWithCredentials = useCallback(
    async (username: string, password: string): Promise<boolean> => {
      try {
        const res = await mutate({ variables: { data: { username, password } } });
        const loginData = res?.data?.login;
        if (loginData) {
          await setAuthState(loginData);
          return true;
        }
        return false;
      } catch (error) {
        console.warn('Login error', error);
        return false;
      }
    },
    [mutate, setAuthState]
  );

  const logout = useCallback(async () => {
    setIsLoggedIn(false);
    await removeStorageItem(STORAGE_KEYS.ACCESS_TOKEN);
    await removeStorageItem(STORAGE_KEYS.REFRESH_TOKEN);
    await removeStorageItem(STORAGE_KEYS.IS_LOGGED_IN);

    try {
      await apolloClient.clearStore();
    } catch (e) {
      // ignore
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isAuthLoading,
        loginWithCredentials,
        setAuthState,
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


