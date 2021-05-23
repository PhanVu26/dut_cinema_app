const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
 ]
import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import MovieDetailTab from '../components/Tab/MovieDetailTab'
import MovieTab from './Tab/MovieTab'
 
export default  MovieDetail = (props) =>{
  const {movie, cinemas}  = props.route.params
  const showCinemas = () =>{
    const rs = cinemas.map(cinema =>{
      return <Text>{cinema.name}</Text>
    })
    return rs;
  }
  return(
    <ScrollView>
      {/* <Card>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Divider/>
        <Card.Image source={{uri: "https://th.bing.com/th/id/R9d00690a9f0f98794933edcfd7567444?rik=8htbu1GVX%2bQ7gw&pid=ImgRaw"}}>
        </Card.Image>
        <Text style={{marginTop: 10}}>
          {"Nhà sản xuất: " + movie.producer}
        </Text>
        <Text style={{marginTop: 10}}>
          {"Thể loại: " + movie.country}
        </Text>
        <Text style={{marginTop: 10}}>
          {"Nhà sản xuất: " + movie.description}
        </Text>
      </Card>
      {showCinemas(cinemas)} */}
      <MovieDetailTab></MovieDetailTab>
    </ScrollView>
 

  )
 }
 // implemented without image with header
 