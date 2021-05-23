import React,{ Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import MovieDetailTab from '../components/Tab/MovieDetailTab'
 
export default class  MovieDetail extends Component{
  constructor(props) {
    super(props);
    console.log(this.props.route.params)
    }
  render(){
    return(
      <ScrollView>
        <MovieDetailTab></MovieDetailTab>
      </ScrollView>
    )
  }
 }