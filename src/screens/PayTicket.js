import React,{ Component } from 'react';
import {Alert} from 'react-native';
import {Container, Content, Text, Form, Item, Label, Input, Button, View} from 'native-base';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class PayTicket extends Component{
    constructor(props) {
      super(props);
    }

    BookTickets = () => {
        let {tickets} = this.props.route.params;
        let TicketsBooked ={
            "tickets": tickets,
            "status": "Booked"
          }
        console.log("abc",TicketsBooked)
        this.props.holdBooking(TicketsBooked)
        Alert.alert("Thông báo","Đặt vé thành công, vui lòng đến quầy để lấy hoặc đổi vé",[
            {text: 'OK', onPress: () => {this.props.navigation.navigate('DUTCinema')}},
          ])
      }
    
    SoldTickets = () => {
        let {tickets} = this.props.route.params;
        let TicketsSold ={
            "tickets": tickets,
            "status": "Sold"
          }
        this.props.holdBooking(TicketsSold)
        Alert.alert("Thông báo","Mua vé thành công, vui lòng đến quầy để lấy vé",[
            {text: 'OK', onPress: () => {this.props.navigation.navigate('DUTCinema')}},
          ])
    }
    ReleaseTicket = () => {
        let {tickets} = this.props.route.params;
        let TicketsSold ={
            "tickets": tickets,
            "status": "Available"
          }
        this.props.holdBooking(TicketsSold)
        Alert.alert("Thông báo","Hủy đặt vé thành công",[
            {text: 'OK', onPress: () => {this.props.navigation.navigate('DUTCinema')}},
          ])
    }

    render(){
        let {price} = this.props.route.params
        console.log(price);
      return (
        <Container  style = {{backgroundColor:'#DDDDDD',paddingTop:100}} >
          <Content padder >
            <Form style = {{backgroundColor:'white', elevation:5}}>
              <Item stackedLabel>
                <Label style = {{color:'black'}}>Họ tên chủ tài khoản</Label>
                <Input
                  type="text"
                  autoCapitalize="none"
                />
              </Item>
              <Item stackedLabel>
                <Label style = {{color:'black'}}>Số tài khoản</Label>
                <Input
                  type="text"
                  autoCapitalize="none"
                />
              </Item>
              <Item stackedLabel>
                <Label style = {{color:'black'}}>Số tiền thanh toán</Label>
                <Input
                  placeholder={price.toString()+"đ"}
                  type="text"
                  autoCapitalize="none"
                  disabled ='true'
                />
              </Item>
              <View style={{ flex: 1, height: 20 }} />
              <View style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingBottom: 20,
                paddingLeft: 40,
                paddingRight: 40,
                flex: 0.2
              }}>
              <Button onPress = {()=>{this.BookTickets()}}>
                <Text>đặt vé</Text>
              </Button>
              <Button onPress = {()=>{this.SoldTickets()}}>
                <Text>mua vé</Text>
              </Button>
              <Button onPress = {()=>{this.ReleaseTicket()}}>
                <Text>Hủy vé</Text>
              </Button>
              </View>
            </Form>
          </Content>
        </Container>
      );
    }
};
const mapStateToProps = (state) => {
    return {
    }
  }
  
  const mapDispatchToProps = (dispatch, props) =>{
    return {
        holdBooking: (data) => dispatch(actions.actHoldBooking(data)),
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(PayTicket);