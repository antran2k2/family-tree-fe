import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import MainNavigator from './Main';
import {navigateAndReset, navigationRef} from './utils';
import LoginContainer from '../Containers/LoginContainer';
import React from 'react';
import {useAppSelector} from '../Hooks/useApp';
import UserProfileContainer from '../Containers/UserProfileContainer';
import TreeContainer from '../Containers/TreeContainer';
import AddPersonContainer from '../Containers/AddPersonContainer';
const Stack = createNativeStackNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  const accessToken = useAppSelector(state => state.authentication.jwtToken);

  useEffect(() => {
    if (!accessToken) {
      navigateAndReset([{name: 'Login'}]);
    }
  }, [accessToken]);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginContainer} />
        <Stack.Screen name="Main" component={MainNavigator} />

        <Stack.Screen name="UserProfile" component={UserProfileContainer} />
        <Stack.Screen name="Tree" component={TreeContainer} />
        <Stack.Screen name="AddPerson" component={AddPersonContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
