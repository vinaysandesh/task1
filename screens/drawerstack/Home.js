 
import React from 'react';
import {View,Text } from 'react-native';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeTab from '../tabscreens/HomeTab';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const Home  = (props)=>{ 
    return (
        <Tab.Navigator
        screenOptions={
            {headerShown:false}
        }
        >
        <Tab.Screen
         options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        name="HomeTab" component={HomeTab} />
        <Tab.Screen 
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        name="ProfileTab" component={Profile} />
      </Tab.Navigator>
    )
}

export default Home;