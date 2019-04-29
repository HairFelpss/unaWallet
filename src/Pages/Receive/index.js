import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default class Receive extends Component {
  goTo = () => {
    const { navigation } = this.props;

    navigation.navigate("Home");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Receive</Text>
        <TouchableOpacity style={styles.button} onPress={this.goTo}>
          <Text style={styles.textButton}>Login com Google</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
