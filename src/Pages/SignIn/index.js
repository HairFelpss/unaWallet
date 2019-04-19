import React, { Component } from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

export default class SignIn extends Component {
  signUp = () => {
    const { navigation } = this.props;

    navigation.navigate("SignUp");
  };

  signIn = () => {
    const { navigation } = this.props;

    navigation.navigate("Home");
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("~/Assets/Img/vector_business_shield.png")}
        />
        <View style={styles.buttonDiv}>
          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            <Text style={styles.textButton}>Login com Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            <Text style={styles.textButton}>Login com Google</Text>
          </TouchableOpacity>
          <TouchableOpacity />
          <Text style={styles.text} onPress={this.signUp}>
            REGISTRAR-SE
          </Text>
        </View>
      </View>
    );
  }
}
