import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  AsyncStorage,
} from "react-native";

import callApi from "../utils/apiCallerServer";

const { width, height } = Dimensions.get("window");

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  _saveAccount = async (account) => {
    try {
      await AsyncStorage.setItem("account", JSON.stringify(account));
      // console.log(JSON.stringify(account));
    } catch (error) {
      console.log(error);
    }
  };

  actLogin = async () => {
    const account = {
      email: this.state.email,
      password: this.state.password,
    };
    callApi("auth/login", "POST", account)
      .then((res) => {
        let dataAccount = res.data;
        if (Object.keys(dataAccount).length !== 0) {
          this._saveAccount(dataAccount);
        }
        console.log(this.props.route.params);
        Alert.alert("Login", "Login successfully!", [{ text: "OK" }]);
        this.props.navigation.pop(2);
      })
      .catch(function (error) {
        Alert.alert("Login", "Something Wrong! Please try again.", [
          { text: "OK" },
        ]);
      });
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
            source={require("../../assets/bg4.jpg")}
            style={{ flex: 1, height: null, width: null }}
          />
        </View>
        <View
          style={{
            height: height / 3,
          }}
        >
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            placeholderTextColor="black"
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.textInput}
            placeholderTextColor="black"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />

          <TouchableOpacity style={styles.button} onPress={this.actLogin}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#ffbbcc",
    height: 60,
    width: 200,
    marginHorizontal: "25%",
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
  },
  textInput: {
    backgroundColor: "#ffddcc",
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    fontSize: 15,
    color: "black",
  },
});
