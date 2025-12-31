import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {FileUploadScreen} from '../screens/FileUploadScreen';
import {ModalScreen} from '../screens/ModalScreen';
import { DrawerContent } from './DrawerContent';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="File Upload" component={FileUploadScreen} />
      <Drawer.Screen name="Open Modal" component={ModalScreen} />
    </Drawer.Navigator>
  );
};
