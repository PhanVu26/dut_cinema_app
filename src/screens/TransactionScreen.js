import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView, Alert  } from "react-native";

import callApi from "../utils/apiCallerServer";

const { width, height } = Dimensions.get("window");

function Item({ item }) {
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
  let dateString = d.getFullYear().toString() + "-" + month + "-" + day;
  return (
    <View style={styles.listBody}>
      <Text style={styles.listItem}>{dateString}</Text>
      <Text style={styles.listItem}>{item.ticket.seat.room.cinema.name}</Text>
      <Text style={styles.listItem}>{item.ticket.showtime.movie.name}</Text>
      <Text style={styles.listItem}>{item.price}</Text>
      <Text style={styles.listItem}>{item.service}</Text>
    </View>
  );
}

class TransactionScreen extends Component {
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
        let transactions = res.data.results;
        transactions = transactions.filter((item) => item.service === "Buy");
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
      return <Item key={index} item={item} />;
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
            <Text style={styles.listItem}>Ng??y</Text>
            <Text style={styles.listItem}>R???p</Text>
            <Text style={styles.listItem}>Phim</Text>
            <Text style={styles.listItem}>Gi?? tr???</Text>
            <Text style={styles.listItem}>Service</Text>
          </View>
          <View>{dataStranscations}</View>
        </ScrollView>
      </View>
    );
  }
}

export default TransactionScreen;

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
