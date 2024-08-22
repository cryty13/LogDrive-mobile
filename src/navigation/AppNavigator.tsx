import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';
import LoginScreen from '../screens/Login/LoginScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return null;
  }

  const { isLoggedIn } = authContext;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen 
          name="Home" 
          component={BottomTabNavigator} 
          options={{ headerShown: false }} 
        />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;