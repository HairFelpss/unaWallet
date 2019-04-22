import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import PasswordIcon from "react-native-vector-icons/Entypo";
import styles from "./styles";
import { colors } from "~/styles";

import Firebase from "~/services/Firebase";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: null
  };

  goTo = page => {
    const { navigation } = this.props;

    navigation.navigate(page);
  };

  handleSignUp = () => {
    this.goTo("SignUp");
  };
  handleLogin = () => {
    const { email, password } = this.state;
    Firebase.auth().signInWithEmailAndPassword(email, password);

    this.goTo("Home");
  };

  handleGoogleLogin = () => {
    let provider = new Firebase.auth.GoogleAuthProvider();
    Firebase.auth()
      .signInWithPopup(provider)
      .then(res => {});

    this.goTo("Home");
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("~/Assets/Img/vector_business_shield.png")}
        />

        <View style={styles.formContainer}>
          <PasswordIcon name="email" size={25} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </View>

        <View style={styles.formContainer}>
          <PasswordIcon name="lock" size={25} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </View>

        <View style={styles.buttonDiv}>
          {this.state.errorMessage && (
            <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
          )}

          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={styles.textButton}>Login com Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={this.handleGoogleLogin}
          >
            <Text style={styles.textButton}>Login com Google</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.text} onPress={this.handleSignUp}>
              REGISTRAR-SE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
