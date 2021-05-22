import { AsyncStorage } from "react-native";

import axios from "axios";
import * as Config from "../constants/config";

_retrieveData = async () => {
  try {
    var account = await AsyncStorage.getItem("account");
    if (account !== null) {
      account = JSON.parse(account);
      return account;
    }
    return account;
  } catch (error) {
    return null;
  }
};

export default async function callApi(endpoint, method = "GET", body) {
  var account = await _retrieveData();
  if (account === null) {
    return axios({
      method: method,
      url: `${Config.API_URL}/${endpoint}`,
      data: body,
    }).catch((err) => {
      console.log(err);
    });
  } else {
    const authAxios = axios.create({
      baseURL: Config.API_URL,
      headers: {
        Authorization: "Bearer " + account.accessToken,
      },
    });
    return authAxios({
      method: method,
      url: `${Config.API_URL}/${endpoint}`,
      data: body,
    }).catch((err) => {
      console.log(err);
    });
  }
}
