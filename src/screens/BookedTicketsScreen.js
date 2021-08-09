import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Icon } from 'react-native-elements';

import callApi from "../utils/apiCallerServer";

const { width, height } = Dimensions.get("window");


const  onRemove = (item) => {
    let ticketId = item.ticket.id;
    let type = item.ticket.seat.type;
    let type_Id = 1;
    if (type !== "Normal") type_Id = 2;
    const payload = {
      tickets: [
        {
          id: ticketId,
          typeId: type_Id,
        },
      ],
      status: "Available",
    };

    callApi(`tickets`, "POST", payload).then((res) => {
//    this.props.navigation.goBack();
        console.log("Remove successfully");
    });
}


function compare(a, b) {
  if (a.ticket.id < b.ticket.id) {
    return -1;
  }
  if (a.ticket.id > b.ticket.id) {
    return 1;
  }
  return 0;
}


function Item({ item, naviagtion }) {
  let d = new Date(item.transaction_time);
  let month = d.getMonth() + 1;
  let day = d.getDate();
  if (month < 10) {
    month = "0" + month.toString();
  } else {
    month = month.toString();
  }
  if (day < 10) {
    day = "0" + day.toString();
  } else {
    day = day.toString();
  }
  let dateString = d.getFullYear().toString().slice(2,4) + "-" + month + "-" + day;
  return (
    <View style={styles.listBody}>
      <Text style={styles.listItem}>{dateString}</Text>
      <Text style={styles.listItem}>{item.ticket.seat.room.cinema.name}</Text>
      <Text style={styles.listItem}>{item.ticket.showtime.movie.name}</Text>
      <Text style={styles.listItem}>{item.price}</Text>
      <Text style={styles.listItem}>{item.service}</Text>
            <TouchableOpacity
            style={styles.listItem} onPress={ () => {
                Alert.alert("Hủy đặt vé", "Bạn thực sự muốn hủy đặt vé?", [
                    {
                        text: "YES",
                        onPress: () => {
                            onRemove(item);
                            naviagtion.goBack();
                        }
                    },
                    {
                        text: "NO",
                    }
                ]);
                
                
            }}>
  
          <Icon name="delete" size={30} color="#e33057" />
      </TouchableOpacity>
    </View>
  );
}


class BookedTicketsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    callApi(
      'transactions/me?filter={"service":{"notequal": "Draft"}}&orderBy={"transaction_time": "DESC"}&perPage=100&relations=user,ticket,ticket.showtime,ticket.showtime.movie,ticket.seat,ticket.seat.room,ticket.seat.room.cinema',
      "GET",
      null
    )
      .then((res) => {

      let arrayBooking1 = res.data.results;
      arrayBooking1 = arrayBooking1.filter((item) => item.service === "Book");
      let arrayBooking2 = res.data.results;
      arrayBooking2 = arrayBooking2.filter((item) => item.service === "Cancel");
      arrayBooking1.sort(compare);
      arrayBooking2.sort(compare);
      let arrayBooking = [];
      let i = 0, j = 0;
      while (i < arrayBooking1.length && j < arrayBooking2.length) {
        let id1 = arrayBooking1[i].ticket.id;
        let id2 = arrayBooking2[j].ticket.id;
        if (id1 < id2) {
          arrayBooking.push(JSON.parse(JSON.stringify(arrayBooking1[i])));
          i++;
        }
        else if (id1 === id2) {
          i++;
          j++;
        }
        else {
          j++;
        }
      }
      for (; i < arrayBooking1.length; i++) {
        arrayBooking.push(JSON.parse(JSON.stringify(arrayBooking1[i])));
      }

      console.log(arrayBooking1.length)
      console.log(arrayBooking2.length)
        let transactions = arrayBooking;
        this.setState({ transactions: transactions });
      })
      .catch(function (error) {
        Alert.alert("Transactions", "Something Wrong! Please try again.", [
          { text: "OK" },
        ]);
        this.props.navigation.goBack();
      });
  }








  render() {
    let dataStranscations = this.state.transactions.map((item, index) => {
      return <Item key={index} item={item} naviagtion={this.props.navigation} />;
    });
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
        }}
      >
        <ScrollView>
          <View style={styles.listHeader}>
            <Text style={styles.listItem}>Ngày</Text>
            <Text style={styles.listItem}>Rạp</Text>
            <Text style={styles.listItem}>Phim</Text>
            <Text style={styles.listItem}>Giá trị</Text>
            <Text style={styles.listItem}>Service</Text>
            <Text style={styles.listItem}>Cancel</Text>
          </View>
          <View>{dataStranscations}</View>
        </ScrollView>
      </View>
    );
  }
}

export default BookedTicketsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  listHeader: {
    backgroundColor: "#f5e6ca",
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
  },
  listBody: {
    backgroundColor: "#ddd",
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
  },
  listItem: {
    flex: 0.5,
    textAlign: "center",
    alignItems: "center",
  },
});
