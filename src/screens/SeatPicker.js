import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Easing, TouchableOpacity, Animated, Dimensions, FlatList, Text, View, StyleSheet} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Card } from 'react-native-elements'
import  Constants  from 'expo-constants';
import * as actions from '../actions/index';
import { CheckBox,Button,Left, Body, Right,Thumbnail,ListItem,List } from 'native-base';
import { Svg, Path } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('window');

const ROWS = 3;
const COLS = 10;
const TIMING = 600;
const TEXT_HEIGHT = 20;
let seats = [];
let seatsAnimation = [];
let bookedSeats = [];
let reservedSeats = [];
let holdSeats = [];

for (var i = 0; i < ROWS + COLS - 1; i++) {
  seatsAnimation.push(i);
}

Array(ROWS * COLS).join(' ').split(' ').map((_, i) => {
  const currentIndex = i % COLS + Math.floor(i / COLS) % ROWS;
  const currentItem = {
    label: (i + 1) % 10 == 0 ? String.fromCharCode((i + 1) / 10 + 64) + 10 : String.fromCharCode((i + 1) / 10 + 65) + (i + 1)%10,
    s: currentIndex,
    key: i,
    animated: new Animated.Value(1)
  };

  seats.push(currentItem);
});

class SeatPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      selectedItems: []
    };

    this.selectionAnimation = new Animated.Value(0);

    this.animatedValue = [];
    seatsAnimation.forEach(value => {
      this.animatedValue[value] = new Animated.Value(0);
    });
  }
  componentDidMount(){
    const {showtimeId} = this.props.route.params;
    this.props.getBooking(showtimeId);
  }
  animate = () => {
    const animations = seatsAnimation.map(item => {
      return Animated.timing(this.animatedValue[item], {
        toValue: this.state.finished ? 0 : 1,
        duration: TIMING
      });
    });
    Animated.sequence([
      Animated.stagger(TIMING * 0.15, animations)
    ]).start(() => {
      this.setState({
        finished: !this.state.finished,
        selectedItems: []
      });

      // this.selectionAnimation.setValue(0);
      Animated.timing(this.selectionAnimation, {
        toValue: 0,
        duration: 1000,
        easing: Easing.elastic(1.3)
      }).start();
    });
  };

  seatsDisabled = (bookings,type) => {
    var num_seat = 30;
    let dataSeats = [];
    if(bookings.tickets!==undefined){
      for (let i = 0; i < num_seat; i++) {
        if ( bookings.tickets[i].status === type) {
          dataSeats.push(bookings.tickets[i].seat);
        }
      }
    }
    let seats = [];
    if (dataSeats.length > 0) {
      for (let z = 0; z < dataSeats.length; z++) {
        let checkRow = dataSeats[z].row;
        let checkColumn = dataSeats[z].column;

        let checkSeat = checkRow+checkColumn;
        seats.push(checkSeat);
      }
  	}
	  return seats;
  };
  
  checkUserAccount = async () => {
    try{
    let account = await AsyncStorage.getItem('account')
    }
    catch(error){

    }

  }

  handleSubmit = (booking) => {
    let allTickets = booking.tickets;
      let seats = this.state.selectedItems;
      let BookedTickets =[];
      for (let index = 0; index < seats.length; index++) {
        let checkRow = seats[index].substring(0, 1);;
        let checkColumn = seats[index].substring(1);
        for (let ind = 0; ind < allTickets.length; ind++) {
          if(checkRow === allTickets[ind].seat.row && Number(checkColumn) === allTickets[ind].seat.column){
            let type_Id = 1;
            BookedTickets.push({
                "id": allTickets[ind].id,
                "typeId": type_Id
              })
          }
        }
      }
      let data1 ={
        "tickets": BookedTickets,
        "status": "Hold"
      }
      this.props.holdBooking(data1)
      return BookedTickets
  }

  renderItem = ({ item }) => {
    const i = item.key;
    const scale = this.animatedValue[item.s].interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0, 1]
    });
    const { selectedItems } = this.state;
    const isSelected = selectedItems.includes(item.label);
    const itemPressScale = item.animated.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0, 1]
    });

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        disabled = {bookedSeats.includes(item.label)||reservedSeats.includes(item.label)||holdSeats.includes(item.label)?true:false}
        onPress={() => {
          const selected = isSelected
            ? selectedItems.filter(i => i !== item.label)
            : [...selectedItems, item.label];


          item.animated.setValue(0);
          this.setState(
            {
              selectedItems: selected
            },
            () => {
              Animated.parallel([
                Animated.timing(this.selectionAnimation, {
                  toValue: -TEXT_HEIGHT * selected.length,
                  duration: 500,
                  easing: Easing.elastic(1.3)
                }),
                Animated.timing(item.animated, {
                  toValue: 1,
                  duration: 200
                })
              ]).start();
            }
          );
        }}
        style={{
          opacity: 0.9
        }}>
        <Animated.View
          style={{
            transform: [
              {
                scale: item.animated
              }
            ]
          }}>
          <Animated.View
            style={[
              {
                backgroundColor: bookedSeats.includes(item.label)? '#ffbb42' : 
                                    (reservedSeats.includes(item.label)?'#d26a74':
                                        (holdSeats.includes(item.label)?'#8dafc1':
                                            (isSelected ? '#8EF0E7' : '#3493FF')))
              },
              styles.item,
              {
                transform: [
                  {
                    scale
                  }
                ]
              }
            ]}>
            <Animated.Text style={[styles.itemText]}>
              {item.label}
            </Animated.Text>
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  render() {
    let movieBooking = this.props.booking;
    bookedSeats = this.seatsDisabled(movieBooking,"Booked");
    reservedSeats = this.seatsDisabled(movieBooking,"Sold");
    holdSeats = this.seatsDisabled(movieBooking,"Hold");
    console.log("Booked seats: ",movieBooking)
    return (
      <View style={styles.container}>
        <View
          style={{
            height: height * 0.01,
            width: width,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row'
          }}>
          <Text style={{ fontSize: 14, paddingLeft: 20, fontWeight: '700', color: '#333' }}>
            Select Seats
          </Text>
          <SimpleLineIcons.Button
            name="refresh"
            size={22}
            color="#666"
            backgroundColor="transparent"
            onPress={this.animate}
          />
        </View>
        <Text style={{ fontSize: 15, fontWeight: '700' , paddingTop: 50}}>
            Screen
        </Text>
        <FlatList
          numColumns={COLS}
          extraData={this.state.selectedItems}
          data={seats}
          style={{ flex: 0.8, paddingTop : 50 }}
          renderItem={this.renderItem}
        />
        <View style ={{flex: 0.5}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            flex: 0.2
          }}>
          <View
            style={{
              height: TEXT_HEIGHT,
              overflow: 'hidden',
              backgroundColor: 'transparent'
            }}>
            <Animated.View
              style={[
                {
                  backgroundColor: '#ffbb42',opacity: 0.9,
                },
                {
                  width: width / COLS /1.8,
                  height: width / COLS /1.8,
                },
              ]}>
            </Animated.View>
          </View>
          <Text style={styles.text}>
            Ghế đã đặt
          </Text>
          <View
            style={{
              height: TEXT_HEIGHT,
              overflow: 'hidden',
              backgroundColor: 'transparent',paddingLeft: 20
            }}>
            <Animated.View
              style={[
                {
                  backgroundColor: '#8dafc1',opacity: 0.9,
                },
                {
                  width: width / COLS /1.8,
                  height: width / COLS /1.8,
                },
              ]}>
            </Animated.View>
          </View>
          <Text style={styles.text}>
            Ghế đang giữ
          </Text>
          <View
            style={{
              height: TEXT_HEIGHT,
              overflow: 'hidden',
              backgroundColor: 'transparent',paddingLeft: 20
            }}>
            <Animated.View
              style={[
                {
                  backgroundColor: '#d26a74',opacity: 0.9,
                },
                {
                  width: width / COLS /1.8,
                  height: width / COLS /1.8,
                },
              ]}>
            </Animated.View>
          </View>
          
          <Text style={styles.text}>
            Ghế đã mua
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            flex: 0.2
          }}>
          <View
            style={{
              height: TEXT_HEIGHT,
              overflow: 'hidden',
              backgroundColor: 'transparent',paddingLeft: 20
            }}>
            <Animated.View
              style={[
                {
                  backgroundColor: '#8EF0E7',opacity: 0.9,
                },
                {
                  width: width / COLS /1.8,
                  height: width / COLS /1.8,
                },
              ]}>
            </Animated.View>
          </View>
          <Text style={styles.text}>
            Ghế đang chọn
          </Text>
          <View
            style={{
              height: TEXT_HEIGHT,
              overflow: 'hidden',
              backgroundColor: 'transparent',paddingLeft: 20
            }}>
            <Animated.View
              style={[
                {
                  backgroundColor: '#3493FF',opacity: 0.9,
                },
                {
                  width: width / COLS /1.8,
                  height: width / COLS /1.8,
                },
              ]}>
            </Animated.View>
          </View>
          <Text style={styles.text}>
            Ghế có thể chọn
          </Text>
        </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute', left: 0, right: 0, bottom: 0,
            paddingRight:20,
            paddingLeft:20,
            paddingTop:20,
            paddingBottom:30,
            backgroundColor: 'white'
          }}>
          <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
              fontSize: 15, 
              fontWeight: 'bold'}}>
            <Text style={{flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 15, 
              fontWeight: 'bold'}}>
              {this.state.selectedItems.length}x Ghế: {this.state.selectedItems.toString()}
            </Text>
            <Text style={{flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 15, 
              fontWeight: 'bold'}}>
              Tổng cộng: {this.state.selectedItems.length*50000 + "đ"}
            </Text>
          </View>
          <Button
            style = {{
              flex: 0.5,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            disabled={this.state.selectedItems.length===0?true:false}
            onPress = {async ()=> {
              try{
                let user = await AsyncStorage.getItem('account');
                let account = JSON.parse(user)
                if(account!==null){
                  let tickets = this.handleSubmit(this.props.booking)
                  this.props.navigation.navigate('Payment',{
                  showtime: movieBooking,tickets:tickets, selectedTicket: this.state.selectedItems,cinema: this.props.route.params.cinema, accessToken:account.accessToken
                })}
                else{
                  alert("You must login to buy ticket")
                }
              }catch(error){
                
              }}}
          >
            <Text>Tiếp tục</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#DDDDDD'
  },
  item: {
    width: width / COLS /1.07,
    height: width / COLS /1.07,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemText: {
    color: 'white',
    fontWeight: '700'
  },
  text: { fontSize: 15, fontWeight: '500' }
});

const mapStateToProps = (state) => {
  return {
      booking: state.booking,
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
      getBooking : (id) => { dispatch(actions.actFetchDataBookingMovieRequest(id))},
      holdBooking: (data) => dispatch(actions.actHoldBooking(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeatPicker); 