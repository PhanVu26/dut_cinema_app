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

class TempScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // const [check, setCheck] = React.useState(null);
  // const [reRender, setReRender] = React.useState(false);

  checkData = async () => {
    try {
      var account = await AsyncStorage.getItem("account");
      if (account !== null) {
        account = JSON.parse(account);
        const test = account.accessToken;
        return true;
      } else return false;
    } catch (error) {
      return false;
    }
    //   this.setState({ isLogin: isLogin });
    //   this.setState({ isShow: false });
  };

  changeScreen = async () => {
    const isLogin = await this.checkData();
    if (isLogin) {
      this.props.navigation.navigate("LogOut");
    } else {
      this.props.navigation.navigate("Auth");
    }
  };
  // React.useEffect(() => {
  //   async function checkData() {
  //     let isLogin = false;
  //     try {
  //       var account = await AsyncStorage.getItem("account");
  //       if (account !== null) {
  //         account = JSON.parse(account);
  //         const test = account.accessToken;
  //         isLogin = true;
  //       } else isLogin = false;
  //     } catch (error) {
  //       isLogin = false;
  //     }
  //     setCheck(isLogin);
  //   }
  //   checkData();
  // }, []);

  // if (!check) {
  //   return (
  //     <Provider store={store}>
  //       <AuthNavigator handleReRender={setReRender} />
  //     </Provider>
  //   );
  // } else {}

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
            onPress={this.changeScreen}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              CHANGE SCREEN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TempScreen;

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
