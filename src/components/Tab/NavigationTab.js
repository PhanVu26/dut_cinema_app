import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomePage from "../../screens/HomePage";
import Profile from "../../screens/Profile";
import Cinema from "../../screens/Cinema";
import TempScreen from "../../screens/TempScreen";
import AuthScreen from "../../screens/AuthScreen";

const NavigationTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Movies"
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Movies"
        component={HomePage}
        options={{
          tabBarLabel: "Trang Chủ",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Cinema}
        options={{
          tabBarLabel: "Đặt vé",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="glasses" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Tài khoản",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default NavigationTab;
