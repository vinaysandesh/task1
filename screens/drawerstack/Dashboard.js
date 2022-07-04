import React from 'react';
import {View,Text } from 'react-native'; 
import Header from '../../components/Header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import Profile from '../tabscreens/Profile';
import HomeTab from '../tabscreens/HomeTab';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Dashboard  = (props)=>{ 
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

export default Dashboard;