import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";

const { width, height } = Dimensions.get("window");

class LogOutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  actLogOut = async () => {
    try {
      await AsyncStorage.removeItem("account");
      this.props.navigation.goBack();
      // console.log(JSON.stringify(account));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
        }}
      >
        <View style={{ ...StyleSheet.absoluteFill }}>
          <Image
            source={require("../../assets/bg3.jpg")}
            style={{ flex: 1, height: null, width: null }}
          />
        </View>
        <View
          style={{
            height: height / 5,
          }}
        >
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: "black" }}
            onPress={this.actLogOut}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              LOG OUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LogOutScreen;

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
});
