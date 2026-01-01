import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useAuth } from '../context/AuthContext';

export const DrawerContent = (props: any) => {
  const { logout } = useAuth();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem label="Logout" onPress={() => logout()} /> */}
    </DrawerContentScrollView>
  );
};
