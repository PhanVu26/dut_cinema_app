
import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
   
export default MovieCard = (props) =>{
    const {movie} = props.route.params;
    const showLists = (lists) => {
        const rs = lists.map(l => {
            return l.name
        })
        return rs.toString();
    }
return(
    <ScrollView>
    <Card>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Divider/>
        <Card.Image source={{uri: "https://th.bing.com/th/id/R9d00690a9f0f98794933edcfd7567444?rik=8htbu1GVX%2bQ7gw&pid=ImgRaw"}}>
        </Card.Image>
        <Text style={{marginTop: 10}}>
          {"Nhà sản xuất: " + movie.producer}
        </Text>
        <Text style={{marginTop: 10}}>
          {"Quốc gia: " + movie.country}
        </Text>
        <Text style={{marginTop: 10}}>
          {"Thể loại: " + showLists(movie.genres)}
        </Text>
        <Text style={{marginTop: 10}}>
          {"Diễn viên: " + showLists(movie.actors)}
        </Text>
        <Text style={{marginTop: 10}}>
          {"Mô tả phim: " + movie.description}
        </Text>
    </Card>
    </ScrollView>
    )
}
// implemented without image with header
