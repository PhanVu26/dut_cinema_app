import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MovieCard from '../Card/MovieCard';
import Showtime from '../RowBlock/Showtime';

const Tab = createMaterialTopTabNavigator();

const MovieDetailTab = (props) => {
  const {movie, cinemas } = props;
  return (
    <Tab.Navigator>
      <Tab.Screen name="Lịch chiếu" component={Showtime} initialParams ={{movie: movie, cinemas: cinemas}}/>
      <Tab.Screen name="Thông tin" component={MovieCard} initialParams ={{movie: movie}} />
    </Tab.Navigator>
  );
}

export default MovieDetailTab;