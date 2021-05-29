import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";

import callApi from "../utils/apiCallerServer";

const { width, height } = Dimensions.get("window");

function Item({ item }) {
  return (
    <View style={styles.listBody}>
      <Text style={styles.listItem}>{item.transaction_time.slice(0, 10)}</Text>
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
      "transactions/me?page=1&perPage=100&relations=user,ticket,ticket.showtime,ticket.showtime.movie,ticket.seat,ticket.seat.room,ticket.seat.room.cinema",
      "GET",
      null
    )
      .then((res) => {
        let transactions = res.data.results;
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
            <Text style={styles.listItem}>Ngày</Text>
            <Text style={styles.listItem}>Rạp</Text>
            <Text style={styles.listItem}>Phim</Text>
            <Text style={styles.listItem}>Giá trị</Text>
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
