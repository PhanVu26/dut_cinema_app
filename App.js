import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import rootReducer from './src/reducers/reducer';
import Confirmation from './src/components/Confirmation';
import BookTicket from "./src/components/BookTicket"
import MovieDetail from './src/components/MovieDetail'
import NavigationTab from './src/components/Tab/NavigationTab'
import ListMovie from './src/screens/ListMovie';


import LogOutScreen from "./src/screens/LogOutScreen";
import AuthScreen from "./src/screens/AuthScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import TempScreen from "./src/screens/TempScreen";

const store = createStore(rootReducer,applyMiddleware(thunk));
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DUTCinema">
          <Stack.Screen name="DUTCinema" component={NavigationTab} />
          <Stack.Screen name="BookTicket" component={BookTicket} />
          <Stack.Screen name="MovieDetail" component={MovieDetail} />
          <Stack.Screen name="Confirmation" component={Confirmation} />
          <Stack.Screen name="ListMovie" component={ListMovie} />
          {/* <Stack.Screen name="Temp" component={TempScreen} /> */}
          {/* <Stack.Screen name="Auth" component={AuthScreen} /> */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="LogOut" component={LogOutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

