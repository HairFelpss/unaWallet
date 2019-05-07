import React, { Component } from "react";

import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { colors } from "~/styles";
import styles from "./styles";

export default class Send extends Component {
  goTo = () => {
    const { navigation } = this.props;

    navigation.navigate("Home");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Send UnaCoins</Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Value"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
          />

          <TextInput
            style={styles.input}
            placeholder="Wallet Address"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.text} onPress={this.goTo}>
            CONFIRM
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}
