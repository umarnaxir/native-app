import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import {  StyleSheet} from 'react-native';
import { DrawerNavigator } from './DrawerNavigator';
import { useThemeContext } from '../context/ThemeContext';

const RootNavigator: React.FC = () => {
  // const { isLoggedIn, isAuthLoading } = useAuth();
  const { navigationTheme } = useThemeContext();

  // if (isAuthLoading) {
  //   return (
  //     <View style={[styles.loadingContainer, { backgroundColor: colors.background }]}>
  //       <ActivityIndicator size="large" color={colors.primary} />
  //     </View>
  //   );
  // }

  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <AuthNavigator /> */}
      <DrawerNavigator/>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default RootNavigator;


