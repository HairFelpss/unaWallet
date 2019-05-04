import React, { Component } from "react";
import firebase from "react-native-firebase";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import IconEntypo from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/FontAwesome";
import { metrics } from "~/styles";

import styles from "./styles";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: []
    };
    this.handleUserInfo();
  }
  handleUserInfo = async () => {
    const currentUser = await firebase.auth().currentUser;
    const userID = currentUser.uid;
    console.log("ta aqui");
    const userInfo = await firebase
      .firestore()
      .doc(`users/${userID}`)
      .get()
      .then(doc => {
        if (doc.exists) {
          return doc.data();
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          return null;
        }
      })
      .catch(function(error) {
        return console.log("Error getting document:", error);
      });
    console.log("userData: ", userInfo);
    this.setState({ userInfo: userInfo });
    console.log("userinfo", this.state.userInfo);
    console.log("saiu aqui");
  };

  goTo = page => {
    const { navigation } = this.props;

    navigation.navigate(page);
  };

  handleLogout = () => {
    if (!firebase.auth().signOut()) return null;

    this.goTo("SignIn");
  };

  goToGraph = () => {
    this.goTo("Graph");
  };

  goToSettings = () => {
    this.goTo("Settings");
  };

  goToBuy = () => {
    this.goTo("Buy");
  };

  goToReceive = () => {
    this.goTo("Receive");
  };

  goToSend = () => {
    this.goTo("Send");
  };

  render() {
    const userInfo = this.state.userInfo;
    return (
      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <IconEntypo
              name="bar-graph"
              size={metrics.iconSize}
              style={styles.icon}
              onPress={this.goToGraph}
            />
          </TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("~/Assets/Img/exemplo.jpg")}
          />
          <TouchableOpacity>
            <Icon
              name="gears"
              size={metrics.iconSize}
              style={styles.icon}
              onPress={this.goToSettings}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{userInfo.username}</Text>
        <TouchableOpacity>
          <Icon
            name="dollar"
            size={35}
            style={styles.icon}
            onPress={this.handleLogout}
          />
        </TouchableOpacity>

        <Text style={styles.unaCoinText}>
          UnaCoins {Math.floor(Math.random() * 10 + 1)}
        </Text>
        <Text style={styles.text}>R$ {Math.floor(Math.random() * 101)}</Text>

        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Icon5
              name="coins"
              size={metrics.iconSize}
              style={styles.icon}
              onPress={this.goToReceive}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="cart-arrow-down"
              size={metrics.iconSize}
              style={styles.icon}
              onPress={this.goToBuy}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="location-arrow"
              size={metrics.iconSize}
              style={styles.icon}
              onPress={this.goToSend}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
