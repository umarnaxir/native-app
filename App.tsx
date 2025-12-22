import React from 'react';
import { ApolloProvider } from '@apollo/client/react';
import apolloClient from './src/apollo/client';
import { AuthProvider } from './src/context/AuthContext';
import { ThemeProvider } from './src/context/ThemeContext';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <AuthProvider>
          <RootNavigator />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
