import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MovieCard from '../Card/MovieCard';
import Showtime from '../RowBlock/Showtime';

const Tab = createMaterialTopTabNavigator();

const MovieDetailTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Lịch chiếu" component={Showtime} />
      <Tab.Screen name="Thông tin" component={MovieCard} />
    </Tab.Navigator>
  );
}

export default MovieDetailTab;