import React,{ Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import MovieDetailTab from '../components/Tab/MovieDetailTab'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
export default class  MovieDetail extends Component{
  constructor(props) {
    super(props);
      console.log(this.props.route.params)
    }
  render(){
    return(
      <ScrollView>
        <Tab.Navigator>
          <Tab.Screen name="Lịch chiếu" component={Showtime} />
          <Tab.Screen name="Thông tin" component={MovieCard} />
        </Tab.Navigator>
      </ScrollView>
    )
  }
 }