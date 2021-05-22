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


const store = createStore(rootReducer,applyMiddleware(thunk));
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="DUT Cinema">
        <Stack.Screen name="DUT Cinema" component={NavigationTab} />
        <Stack.Screen name="BookTicket" component={BookTicket} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="ListMovie" component={ListMovie} />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}









