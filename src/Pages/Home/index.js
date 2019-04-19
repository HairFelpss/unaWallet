import React, { Component } from "react";

import { View, Text, Image } from "react-native";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import IconEntypo from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors, metrics } from "~/styles";
import styles from "./styles";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <IconEntypo
            name="bar-graph"
            size={metrics.iconSize}
            style={styles.icon}
          />
          <Image
            style={styles.logo}
            source={require("~/Assets/Img/exemplo.jpg")}
          />
          <Icon name="gears" size={metrics.iconSize} style={styles.icon} />
        </View>
        <Text style={styles.text}>Felipe Alves</Text>
        <Icon name="dollar" size={35} style={styles.icon} />
        <Text style={styles.unaCoinText}>UnaCoins 50</Text>
        <Text style={styles.text}>R$ 1000</Text>
        <View style={styles.iconsContainer}>
          <Icon5 name="coins" size={metrics.iconSize} style={styles.icon} />
          <Icon
            name="cart-arrow-down"
            size={metrics.iconSize}
            style={styles.icon}
          />
          <Icon
            name="location-arrow"
            size={metrics.iconSize}
            style={styles.icon}
          />
        </View>
      </View>
    );
  }
}
