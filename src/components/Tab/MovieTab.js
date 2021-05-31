import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MoviesShowing from '../MoviesShowing';
import MoviesComingSoon from '../MoviesComingSoon';

const Tab = createMaterialTopTabNavigator();

const MovieTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Đang chiếu" component={MoviesShowing} />
      <Tab.Screen name="Sắp chiếu" component={MoviesComingSoon} />
    </Tab.Navigator>
  );
}

export default MovieTab;