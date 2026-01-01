import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {FileUploadScreen} from '../screens/FileUploadScreen';
import {ModalScreen} from '../screens/ModalScreen';
import {OTPScreen} from '../screens/OTPScreen/OTPScreen';
import { DrawerContent } from './DrawerContent';
import {PermissionsScreen} from '../screens/PermissionsScreen/PermissionsScreen';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="OTP" component={OTPScreen} />
      <Drawer.Screen name="Upload File" component={FileUploadScreen} />
      <Drawer.Screen name="Open Modal" component={ModalScreen} />
      {/* <Drawer.Screen name="Permission" component={PermissionsScreen} /> */}
    </Drawer.Navigator>
  );
};
