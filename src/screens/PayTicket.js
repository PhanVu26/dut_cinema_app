import React, {Component} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import {WebView} from 'react-native-webview';
import Feather from 'react-native-vector-icons/Feather';
class PayTicket extends Component{
    constructor(props) {
      super(props);
      this.state ={
        showGateway: true,
        prog: false,
        progClr: '#000'
      }
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
    setShowGateway(status){
      this.setState({ showGateway: status });
    }
    setProg(status){
      this.setState({ prog: status });
    }
    setProgClr(color){
      this.setState({ progClr: color });
    }
    onMessage(e) {
      let data = e.nativeEvent.data;
      // console.log(data);
      let payment = JSON.parse(data);
      if (payment.status === 'COMPLETED') {
        alert('PAYMENT MADE SUCCESSFULLY!');
      } else {
        alert('PAYMENT FAILED. PLEASE TRY AGAIN.');
      }
    }
    render(){
      const {showGateway, prog, progClr} = this.state;
      const {status} = this.props.route.params
      return (
        <SafeAreaView style={{flex: 1}}>
        <Modal
            visible={showGateway}
            onDismiss={() => this.setShowGateway(false)}
            onRequestClose={() =>  this.props.navigation.navigate('Payment')}
            animationType={'fade'}
            transparent>
            <View style={styles.webViewCon}>
              <View style={styles.wbHead}>
                <TouchableOpacity
                  style={{padding: 13}}
                  onPress={() => this.props.navigation.navigate('Payment')}>
                  <Feather name={'x'} size={24} />
                </TouchableOpacity>
                <Text
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#00457C',
                  }}>
                  PayPal GateWay
                </Text>
                <View style={{padding: 13, opacity: prog ? 1 : 0}}>
                  <ActivityIndicator size={24} color={progClr} />
                </View>
              </View>
              <WebView
                source={{uri: 'https://my-pay-web.web.app/'}}
                style={{flex: 1}}
                onLoadStart={() => {
                  this.setProg(true);
                  this.setProgClr('#000');
                }}
                onLoadProgress={() => {
                  this.setProg(true);
                  this.setProgClr('#00457C');
                }}
                onLoadEnd={() => {
                  this.setProg(false);
                }}
                onLoad={() => {
                  this.setProg(false);
                }}
                onMessage={() => {
                  this.onMessage;
                  status=="book"?this.BookTickets():this.SoldTickets();
                }}
              />
            </View>
        </Modal>
        </SafeAreaView>
      );  
    }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  btnCon: {
    height: 45,
    width: '70%',
    elevation: 1,
    backgroundColor: '#00457C',
    borderRadius: 3,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    color: '#fff',
    fontSize: 18,
  },
  webViewCon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  wbHead: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    zIndex: 25,
    elevation: 2,
  },
});
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
