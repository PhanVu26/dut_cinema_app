import React,{ Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import MovieDetailTab from '../components/Tab/MovieDetailTab'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MovieCard from '../components/Card/MovieCard';
import MovieShowtime from './MovieShowtime';


const Tab = createMaterialTopTabNavigator();
export default class  MovieBooking extends Component{
  constructor(props) {
    super(props);
      console.log("Showtime of movie", this.props.route.params)
      const {movie} = this.props.route.params;
      this.state = {
        movie: movie
      }
    }
  render(){
    return(
      <ScrollView>
        <Tab.Navigator>
          <Tab.Screen name="Lịch chiếu" component={MovieShowtime} initialParams ={{movie: this.state.movie}} />
          <Tab.Screen name="Thông tin" component={MovieCard} initialParams ={{movie: this.state.movie}}  />
        </Tab.Navigator>
      </ScrollView>
    )
  }
 }