import * as React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Navigator } from "react-native";
import Movies from "./src/components/Movies";
import Confirmation from "./src/components/Confirmation";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { apiMiddleware, reducer } from "./src/reducers/index";
import { AsyncStorage } from "react-native";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

import LogOutScreen from "./src/screens/LogOutScreen";
import AuthScreen from "./src/screens/AuthScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import TempScreen from "./src/screens/TempScreen";
// Create Redux store
// const store = createStore(reducer, {}, applyMiddleware(apiMiddleware));

// Fetch movie data
// store.dispatch({ type: "GET_MOVIE_DATA" });
// store.dispatch({type: 'GET_MOVIE_DATA'});
// store.dispatch({type: 'GET_THEATER_DATA'});

import HomePage from "./src/screens/HomePage";
import Cinema from "./src/components/Cinema";
import BookTicket from "./src/components/BookTicket";
import MovieDetail from "./src/components/MovieDetail";
import thunk from "redux-thunk";

import appReducer from "./src/reducers/appReducer";
const store = createStore(appReducer, applyMiddleware(thunk));

// const RouteMapper = (route, navigator) => {
//   if (route.name === 'movies') {
//     return (
//       <Movies navigator={navigator} />
//     );
//   } else if (route.name === 'confirmation') {
//     return (
//       <Confirmation code={route.code} navigator={navigator} />
//     );
//   }
// };
function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications({ navigation }) {
  return (
    <Button
      title="Go somewhere"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate("Movies");
      }}
    />
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
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
          tabBarLabel: "Cá nhân",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="DUT Cinema" component={MyTabs} />
            <Stack.Screen name="BookTicket" component={BookTicket} />
            <Stack.Screen name="MovieDetail" component={MovieDetail} />
            <Stack.Screen name="Confirmation" component={Confirmation} /> */}
          <Stack.Screen name="Temp" component={TempScreen} />
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="LogOut" component={LogOutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
