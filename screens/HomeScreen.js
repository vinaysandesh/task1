import React from 'react'; 
import {useRecoilState} from 'recoil';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {loggedInUserType} from '../recoil/store';
import Home from './drawerstack/Home';
import Shipment from './drawerstack/Shipment';
import Profile from './drawerstack/Profile';
import Dashboard from './drawerstack/Dashboard';
import UserList from './drawerstack/UserList';
import Track from './drawerstack/Track';
const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  const [userType, setText] = useRecoilState(loggedInUserType);

  return (
    <>
      <Drawer.Navigator initialRouteName="Home">
        {userType == 'supervisor' ? (
          <>
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="UserList" component={UserList} />
            <Drawer.Screen name="Track" component={Track} />
            <Drawer.Screen name="Profile" component={Profile} />
          </>
        ) : (
          <>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Shipment" component={Shipment} />
            <Drawer.Screen name="Profile" component={Profile} />
          </>
        )}
      </Drawer.Navigator>
    </>
  );
};
export default HomeScreen;
