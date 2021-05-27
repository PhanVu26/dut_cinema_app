
import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
   
export default Payment = (props) =>{
    const {showtime,selectedTicket,cinema} = props.route.params;
    console.log(selectedTicket)
    let movie = showtime.movie;
    let room = showtime.room;
    let starttime = showtime.startTime.split("T");
    let time = starttime[0]+ starttime[1].slice(0,5);
return(
    <ScrollView>
    <Card>
        <Card.Title>Thông tin giao dịch</Card.Title>
        <Card.Divider/>
        <Text style={{marginTop: 10}}>
          {"Tên phim: " + movie.name}
        </Text>
        <Text style={{marginTop: 10}}>
          {"Suất chiếu: " + time}
        </Text>
        <Text style={{marginTop: 10}}>
          {"Phòng chiếu: " +cinema+", phòng "+ room.id}
        </Text>
        <Text style={{marginTop: 10}}>
          {"Ghế: " + selectedTicket.toString()}
        </Text>
        <Text style={{marginTop: 10}}>
          {"Giá vé: 50.000 vnđ"}
        </Text>
        <Text style={{marginTop: 10}}>
          {"Tổng thanh toán: " + selectedTicket.length*50000+" vnđ"}
        </Text>
    </Card>
    </ScrollView>
    )
}
