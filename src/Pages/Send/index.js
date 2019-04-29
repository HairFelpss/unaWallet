import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default class Send extends Component {
  goTo = () => {
    const { navigation } = this.props;

    navigation.navigate("Home");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Send</Text>
        <TouchableOpacity style={styles.button} onPress={this.goTo}>
          <Text style={styles.textButton}>Login com Google</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
