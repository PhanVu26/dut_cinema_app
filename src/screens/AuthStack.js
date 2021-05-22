import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "./AuthScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import React, { Component } from "react";
const Stack = createStackNavigator();

const AuthStack = ({ handleReRender }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
