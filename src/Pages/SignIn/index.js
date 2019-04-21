import React, { Component } from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: null
  };

  goToSignUp = () => {
    const { navigation } = this.props;

    navigation.navigate("SignUp");
  };

  handleLogin = () => {
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
          {this.state.errorMessage && (
            <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
          )}
          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={styles.textButton}>Login com Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={styles.textButton}>Login com Google</Text>
          </TouchableOpacity>
          <TouchableOpacity />
          <Text style={styles.text} onPress={this.goToSignUp}>
            REGISTRAR-SE
          </Text>
        </View>
      </View>
    );
  }
}
