
import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
   
export default MovieCard = (props) =>{

return(
    <ScrollView>
    <Card>
        <Card.Title>Name</Card.Title>
        <Card.Divider/>
        <Card.Image source={{uri: "https://th.bing.com/th/id/R9d00690a9f0f98794933edcfd7567444?rik=8htbu1GVX%2bQ7gw&pid=ImgRaw"}}>
        </Card.Image>
    </Card>
    </ScrollView>
    )
}
// implemented without image with header
