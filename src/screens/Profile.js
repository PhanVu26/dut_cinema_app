import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  AsyncStorage,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false, account: {} };
  }

  async reLoadData() {
    account = await this.checkData();
    isLogin2 = false;
    if (account !== null) isLogin2 = true;
    this.setState({ isLogin: isLogin2, account: account });
  }

  checkData = async () => {
    try {
      var account = await AsyncStorage.getItem("account");
      if (account !== null) {
        account = JSON.parse(account);
        const test = account.accessToken;
        return account;
      } else return null;
    } catch (error) {
      return null;
    }
    //   this.setState({ isLogin: isLogin });
    //   this.setState({ isShow: false });
  };

  render() {
    this.reLoadData();
    if (this.state.isLogin) {
      return (
        <View style={styles.container}>
          <View style={{ margin: 20 }}>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity onPress={() => {}}>
                <View
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ImageBackground
                    source={require("../../assets/avatar.png")}
                    style={{ height: 100, width: 100 }}
                    imageStyle={{ borderRadius: 15 }}
                  ></ImageBackground>
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 10,
                  marginBottom: 20,
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {this.state.account.user.name}
              </Text>
            </View>

            <View style={styles.action}>
              <FontAwesome name="user-o" size={20} />
              <TextInput
                placeholder="Name"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
                value={this.state.account.user.name}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome name="envelope-o" size={20} />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#666666"
                autoCorrect={false}
                keyboardType="email-address"
                style={styles.textInput}
                value={this.state.account.user.email}
                editable={false}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome name="heart-o" size={20} />
              <TextInput
                placeholder="Age"
                placeholderTextColor="#666666"
                autoCorrect={false}
                keyboardType="number-pad"
                style={styles.textInput}
                value={this.state.account.user.age}
              />
            </View>
            <TouchableOpacity
              style={{ ...styles.action, marginTop: 20 }}
              onPress={() => this.props.navigation.navigate("Transactions")}
            >
              <FontAwesome name="money" size={20} />
              <Text style={{ paddingLeft: 10, fontSize: 18 }}>
                Transactions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.action, marginTop: 20 }}
              onPress={() => this.props.navigation.navigate("BookedTickets")}
            >
              <FontAwesome name="money" size={20} />
              <Text style={{ paddingLeft: 10, fontSize: 18 }}>
                Booked Tickets
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.action, marginTop: 20 }}
              onPress={() => this.props.navigation.navigate("LogOut")}
            >
              <FontAwesome name="flag" size={20} />
              <Text style={{ paddingLeft: 10, fontSize: 18 }}>LogOut</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={{ margin: 20 }}>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity onPress={() => {}}>
                <View
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ImageBackground
                    source={require("../../assets/avatar.png")}
                    style={{ height: 100, width: 100 }}
                    imageStyle={{ borderRadius: 15 }}
                  ></ImageBackground>
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 10,
                  marginBottom: 20,
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Name
              </Text>
            </View>

            <View style={styles.action}>
              <FontAwesome name="user-o" size={20} />
              <TextInput
                placeholder="Name"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome name="envelope-o" size={20} />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#666666"
                autoCorrect={false}
                keyboardType="email-address"
                style={styles.textInput}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome name="heart-o" size={20} />
              <TextInput
                placeholder="Age"
                placeholderTextColor="#666666"
                autoCorrect={false}
                keyboardType="number-pad"
                style={styles.textInput}
              />
            </View>
            <TouchableOpacity
              style={{ ...styles.action, marginTop: 20 }}
              onPress={() => this.props.navigation.navigate("Auth")}
            >
              <FontAwesome name="flag" size={20} />
              <Text style={{ paddingLeft: 10, fontSize: 18 }}>
                Login or Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    paddingTop: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    fontSize: 18,
  },
});
