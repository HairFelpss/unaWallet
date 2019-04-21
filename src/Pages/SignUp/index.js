import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import PasswordIcon from "react-native-vector-icons/Entypo";
import { colors } from "~/styles";

import styles from "./styles";

export default class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errorMessage: null,
    errorPasswordMessage: null,
    successMessage: null, //analisar se sera necessario
    passwordChecked: false
  };

  handlesignUp = () => {
    this.handlePassword();
    const { passwordChecked } = this.state;

    if (passwordChecked == false) return null;

    const { navigation } = this.props;

    navigation.navigate("Home");
  };

  handlePassword = () => {
    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({ errorPasswordMessage: true, passwordChecked: false });
    } else {
      this.setState({ errorPasswordMessage: false, passwordChecked: true });
      return true;
    }
  };

  render() {
    const { errorMessage, errorPasswordMessage } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>REGISTER</Text>
        {errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}

        <View style={styles.formContainer}>
          <Icon5 name="user-graduate" size={25} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />
        </View>

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

        {errorPasswordMessage && (
          <Text style={styles.error}>Senha nao compativel</Text>
        )}

        <View style={styles.formContainer}>
          <PasswordIcon name="lock" size={25} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirme sua senha"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            value={this.state.confirmPassword}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.text} onPress={this.handlesignUp}>
            CRIAR CONTA
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
