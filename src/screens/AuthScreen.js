import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  handleOnSignIn = () => {
    this.props.navigation.navigate("Login");
  };

  handleOnSignUp = () => {
    this.props.navigation.navigate("Register");
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
        <View style={{ height: height / 3 }}>
          <TouchableOpacity style={styles.button} onPress={this.handleOnSignIn}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: "black" }}
            onPress={this.handleOnSignUp}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default AuthScreen;

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
