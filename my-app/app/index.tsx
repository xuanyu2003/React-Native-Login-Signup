import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from './LoginView';
import SignupView from './SignupView';

// Define the parameter list for the stack navigator
type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Signup" component={SignupView} />
      </Stack.Navigator>
  );
};

export default App;
