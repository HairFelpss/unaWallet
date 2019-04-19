import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import PasswordIcon from "react-native-vector-icons/Entypo";
import { colors } from "~/styles";

import styles from "./styles";

export default class SignUp extends Component {
  signIn = () => {
    const { navigation } = this.props;

    navigation.navigate("Home");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>REGISTER</Text>
        <View style={styles.passwordContainer}>
          <Icon5 name="user-graduate" size={25} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.passwordContainer}>
          <PasswordIcon name="email" size={25} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.passwordContainer}>
          <PasswordIcon name="lock" size={25} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.passwordContainer}>
          <PasswordIcon name="lock" size={25} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirme sua senha"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.text} onPress={this.signIn}>
            CRIAR CONTA
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
