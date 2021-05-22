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
} from "react-native";

import callApi from "../utils/apiCallerServer";

const { width, height } = Dimensions.get("window");

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      prePassword: "",
    };
  }

  checkInformation = () => {
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.password !== "" &&
      this.state.prePassword !== ""
    )
      return true;
    else return false;
  };

  actRegister = async () => {
    let isValid = this.checkInformation();
    if (isValid) {
      if (this.state.password === this.state.prePassword) {
        if (
          this.state.password.length >= 8 &&
          this.state.password.length <= 20
        ) {
          const account = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
          };
          callApi("auth/register", "POST", account)
            .then((res) => {
              console.log("data: ", res.data);
              let notification = res.data.message;

              if (res.status !== 201) {
                Alert.alert("Register", "Register fail! Please try again.", [
                  { text: "OK" },
                ]);
              } else {
                Alert.alert("Register", "Register successfully!", [
                  { text: "OK" },
                ]);
                this.props.navigation.goBack();
              }
            })
            .catch(function (error) {
              Alert.alert("Register", "Something Wrong! Please try again.", [
                { text: "OK" },
              ]);
            });
        } else {
          Alert.alert("Error", "8 <= length of password <= 20", [
            { text: "OK" },
          ]);
        }
      } else {
        Alert.alert("Error", "Pre-password is wrong!", [{ text: "OK" }]);
      }
    } else {
      Alert.alert("Error", "Please fill out enough information!", [
        { text: "OK" },
      ]);
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
            source={require("../../assets/bg5.jpg")}
            style={{ flex: 1, height: null, width: null }}
          />
        </View>
        <View
          style={{
            height: height / 2,
          }}
        >
          <TextInput
            placeholder="Name"
            style={styles.textInput}
            placeholderTextColor="black"
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
          />
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
          <TextInput
            secureTextEntry={true}
            placeholder="Re-password"
            style={styles.textInput}
            placeholderTextColor="black"
            value={this.state.prePassword}
            onChangeText={(prePassword) => this.setState({ prePassword })}
          />
          <TouchableOpacity style={styles.button} onPress={this.actRegister}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#e6d5b8",
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
    backgroundColor: "#f9f3f3",
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    fontSize: 17,
    color: "black",
  },
});
