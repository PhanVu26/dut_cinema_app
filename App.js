import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

import rootReducer from "./src/reducers/reducer";
import Confirmation from "./src/components/Confirmation";
import BookTicket from "./src/components/BookTicket";
import MovieDetail from "./src/components/MovieDetail";
import NavigationTab from "./src/components/Tab/NavigationTab";
import ListMovie from "./src/screens/ListMovie";
import SeatPicker from "./src/screens/SeatPicker";
import MovieBooking from "./src/screens/MovieBooking";
import MovieShowtime from "./src/screens/MovieShowtime";
import Payment from "./src/screens/Payment";
import LogOutScreen from "./src/screens/LogOutScreen";
import AuthScreen from "./src/screens/AuthScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import TempScreen from "./src/screens/TempScreen";
import Profile from "./src/screens/Profile";
import TicketPicker from "./src/screens/TicketPicker";
import PayTicket from "./src/screens/PayTicket";
import TransactionScreen from "./src/screens/TransactionScreen";

const store = createStore(rootReducer, applyMiddleware(thunk));
const Stack = createStackNavigator();

export default function App() {
  return (
    // <Profile />
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DUTCinema">
          <Stack.Screen name="DUTCinema" component={NavigationTab} />
          <Stack.Screen name="BookTicket" component={BookTicket} />
          <Stack.Screen name="MovieDetail" component={MovieDetail} />
          <Stack.Screen name="Confirmation" component={Confirmation} />
          <Stack.Screen name="ListMovie" component={ListMovie} />
          <Stack.Screen name="SeatPicker" component={SeatPicker} />
          <Stack.Screen name="MovieShowtime" component={MovieShowtime} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="PayTicket" component={PayTicket} />
          <Stack.Screen name="MovieBooking" component={MovieBooking} />
          <Stack.Screen name="TicketPicker" component={TicketPicker} />
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="LogOut" component={LogOutScreen} />
          <Stack.Screen name="Transactions" component={TransactionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
