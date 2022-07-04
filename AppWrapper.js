import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {View, Text, useColorScheme} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import { 
  useRecoilState, 
} from 'recoil';
import {loggedInUserType} from './recoil/store';
import { theme } from './constants/Theme';

const Stack = createStackNavigator();

const AppWrapper = () => {
  const [userType, setText] = useRecoilState(loggedInUserType);   
  return (
    <NavigationContainer theme={theme}> 
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {userType  ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppWrapper;
