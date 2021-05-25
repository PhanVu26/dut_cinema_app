import React, {Component, useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar , TouchableHighlight} from 'react-native';
import { Button } from 'react-native-elements';



const Item = ( {item, onIncreaseQuantity, onDecreaseQuantity} ) => (
    <View style={[styles.item, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "row",
        justifyContent:'space-between',
        alignItems: 'center'
        }]}>
        <View style={{ flex: 2}} >
            <Text>{item.name}</Text>
            <Text>{item.price + 'vnđ/vé'}</Text>
        </View>
        <View style={{ flex: 1}} >
            <View style={{
                flex:1,
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "row",
                alignItems:'center'
            }}>
            <View style={{ flex: 1, textAlign : 'center', borderRadius: 20 }} >
                <TouchableHighlight style={{backgroundColor:'#DDDDDD', borderRadius: 20, padding:5}} onPress={() => onDecreaseQuantity(item.id)}>
                    <Text style={{textAlign : 'center'}}>-</Text>
                </TouchableHighlight>
            </View>
            <View style={{ flex: 1,textAlign : 'center'  }} ><Text style={{textAlign : 'center'}}>{item.quantity}</Text></View>
            <View style={{ flex: 1, backgroundColor: "#eee" , textAlign : 'center',  borderRadius: 20 }} >
                <TouchableHighlight 
                  onPress={() => onIncreaseQuantity(item.id)}
                  style={{backgroundColor:'#eee', borderRadius: 20, padding:5}}>
                    <View >
                        <Text style={{textAlign : 'center'}}>+</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
        </View>
        <View style={{ flex: 2, marginLeft:30}} >
            <Text>Tổng : {item.total + 'vnđ'}</Text>
        </View>
    </View>
);
class TicketPicker extends Component{
  constructor(props){
    super(props)
    this.state = {
      DATA : [
        {
          id: '1',
          name: 'Normal',
          quantity: 0,
          price: 45000,
          total: 0
        },
        {
          id: '2',
          name: 'Student',
          quantity: 0,
          price: 20000,
          total: 0
        },
        {
          id: '3',
          name: 'Third Item',
          quantity: 0,
          price: 30000,
          total: 0
        }
      ],
      total: 0
    }
  }
  
  findIndex = (list, id) => {
    var result = -1;
    list.forEach((l, index) => {
        if(l.id === id ){
            result = index;
        }
    });
    return result;
}
onIncreaseQuantity = (id) => {
  const newData = [...this.state.DATA]
  let index = this.findIndex(this.state.DATA, id);
  const ticketItem = this.state.DATA[index];
  const newQuantity = ticketItem.quantity + 1
  const total = ticketItem.total + ticketItem.price
  newData[index] = {...this.state.DATA[index],
    quantity: newQuantity,
    total: total
  }
  let sum = 0;
  newData.forEach(item => {
    sum += item.total
  })
  this.setState({
    DATA: newData,
    total: sum
  })    
}
onDecreaseQuantity = (id) => {
  const newData = [...this.state.DATA]
  let index = this.findIndex(this.state.DATA, id);
  const ticketItem = this.state.DATA[index];
  newData[index] = {...this.state.DATA[index],
    quantity: ticketItem.quantity <= 0 ? 0 : ticketItem.quantity - 1,
    total: ticketItem.total - ticketItem.price <= 0 ? 0: ticketItem.total - ticketItem.price
  }
  let sum = 0;
  newData.forEach(item => {
    sum += item.total
  })
  this.setState({
    DATA: newData,
    total: sum
  })    
}
renderItem = ({ item }) => (
    <Item item={item} 
      onIncreaseQuantity = {() => this.onIncreaseQuantity(item.id)}
      onDecreaseQuantity = {() => this.onDecreaseQuantity(item.id)}
    />
  );

  render(){
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={this.state.DATA}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
      <Text style={{marginBottom:20, marginLeft:20}}>Tổng: {this.state.total} </Text>
      <View style={{margin:15}}>
        <Button
          onPress = {() => this.props.navigation.navigate('SeatPicker', {showtimeId:1})}
          title="Chọn ghế">
        </Button>
      </View>
    </SafeAreaView>

  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'orange'
  },
  title: {
    fontSize: 32,
  },
});

export default TicketPicker;