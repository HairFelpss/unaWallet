import React, { Component } from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import IconEntypo from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/FontAwesome";
import { metrics } from "~/styles";
import styles from "./styles";

import Firebase from "~/services/Firebase";

export default class Home extends Component {
  goBack = () => {
    const { navigation } = this.props;

    navigation.navigate("SignIn");
  };

  logout = async () => {
    await Firebase.auth().signOut();
    this.goBack();
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <IconEntypo
              name="bar-graph"
              size={metrics.iconSize}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("~/Assets/Img/exemplo.jpg")}
          />
          <TouchableOpacity>
            <Icon name="gears" size={metrics.iconSize} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Felipe Alves</Text>

        <TouchableOpacity>
          <Icon
            name="dollar"
            size={35}
            style={styles.icon}
            onPress={this.logout}
          />
        </TouchableOpacity>

        <Text style={styles.unaCoinText}>UnaCoins 50</Text>
        <Text style={styles.text}>R$ 1000</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Icon5 name="coins" size={metrics.iconSize} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="cart-arrow-down"
              size={metrics.iconSize}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="location-arrow"
              size={metrics.iconSize}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
