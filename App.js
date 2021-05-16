import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Navigator,
} from 'react-native';
import Movies from './src/components/Movies';
import Confirmation from './src/components/Confirmation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware, reducer } from './src/reducers/index';

// Create Redux store
const store = createStore(reducer, {}, applyMiddleware(apiMiddleware));

// Fetch movie data
store.dispatch({type: 'GET_MOVIE_DATA'});

const RouteMapper = (route, navigator) => {
  if (route.name === 'movies') {
    return (
      <Movies navigator={navigator} />
    );
  } else if (route.name === 'confirmation') {
    return (
      <Confirmation code={route.code} navigator={navigator} />
    );
  }
};

export default function App() {
  return (
    <Provider store={store}>
      <Movies></Movies>
         {/* <Navigator
          // Default to movies route
          initialRoute={{ name: 'movies' }}
          // Use FloatFromBottom transition between screens
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
          // Pass a route mapper functions
          renderScene={RouteMapper}
        /> */}
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React, { Component } from 'react';
// import {
//   Navigator,
// } from 'react-native';
// import Movies from './src/components/Movies';
// import Confirmation from './src/components/Confirmation';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import { apiMiddleware, reducer } from './src/reducers/index';

// // Create Redux store
// const store = createStore(reducer, {}, applyMiddleware(apiMiddleware));

// // Fetch movie data
// store.dispatch({type: 'GET_MOVIE_DATA'});

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

// export default class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Navigator
//           // Default to movies route
//           initialRoute={{ name: 'movies' }}
//           // Use FloatFromBottom transition between screens
//           configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
//           // Pass a route mapper functions
//           renderScene={RouteMapper}
//         />
//       </Provider>
//     );
//   }
// }

