import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookTicket from '../BookTicket'
import Movies from '../Movies';

const Tab = createMaterialTopTabNavigator();

const MovieTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Đang chiếu" component={Movies} />
      <Tab.Screen name="Sắp chiếu" component={Movies} />
    </Tab.Navigator>
  );
}

export default MovieTab;