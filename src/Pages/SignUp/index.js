import React from "react";
import ValidationComponent from "react-native-form-validator";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import Icon5 from "react-native-vector-icons/FontAwesome5";
import PasswordIcon from "react-native-vector-icons/Entypo";
import { colors } from "~/styles";

import firebase from "react-native-firebase";

import styles from "./styles";

export default class SignUp extends ValidationComponent {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    errorUserNameMessage: null,
    errorPasswordMessage: null,
    errorConfirmPasswordMessage: null,
    successMessage: null, //analisar se sera necessario
    passwordChecked: false,
    usernameChecked: false
  };

  GoTo = page => {
    const { navigation } = this.props;
    navigation.navigate(page);
  };

  handleValidate = () => {
    this.validate({
      username: { minlength: 3, required: true },
      email: { email: true, required: true },
      password: { minlength: 3, required: true }
    });
  };

  handlesignUp = () => {
    try {
      this.handleValidate();
      this.handleUserName();
      this.handlePassword();

      const { passwordChecked, usernameChecked, email, password } = this.state;

      if (!!passwordChecked || !!usernameChecked) {
        return null;
      }

      this.saveUser(email, password);
      this.GoTo("Home");
    } catch {
      //nao sei como tratar erro ainda
    }
  };

  handlePassword = () => {
    const { password, confirmPassword } = this.state;

    if (password == "") {
      this.setState({ errorPasswordMessage: true, passwordChecked: false });
    } else if (password !== confirmPassword) {
      this.setState({
        confirmPassword: "",
        errorPasswordMessage: true,
        errorConfirmPasswordMessage: true,
        passwordChecked: false
      });
    } else {
      this.setState({ errorPasswordMessage: false, passwordChecked: true });
    }
  };

  handleUserName = () => {
    const { username } = this.state;
    alph = /^[a-zA-Z]+$/;

    if (!alph.test(username)) {
      this.setState({ errorUserNameMessage: true, name: "" });
      return null;
    }

    this.setState({
      errorUserNameMessage: false,
      usernameChecked: true
    });
  };

  saveUser = async (email, password) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        console.log("deu ruim");
        // ...
      });
  };

  render() {
    const {
      errorUserNameMessage,
      errorPasswordMessage,
      errorConfirmPasswordMessage
    } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>REGISTER</Text>

        <View style={styles.formContainer}>
          <Icon5 name="user-graduate" size={25} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome de Usuario"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
            onChangeText={username => this.setState({ username })}
            value={this.state.name}
          />
        </View>

        {(errorUserNameMessage && (
          <Text style={styles.error}>Nome com caracteres incorretos</Text>
        )) ||
          (this.isFieldInError("name") && (
            <Text style={styles.error}>Nome com caracteres incorretos</Text>
          ))}

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

        {this.isFieldInError("email") && (
          <Text style={styles.error}>email invalido</Text>
        )}

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

        {(errorPasswordMessage && (
          <Text style={styles.error}>Favor escolher uma senha valida</Text>
        )) ||
          (this.isFieldInError("password") && (
            <Text style={styles.error}>Favor escolher uma senha valida</Text>
          ))}

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

        {errorConfirmPasswordMessage && (
          <Text style={styles.error}>Senha nao compativel</Text>
        )}

        <TouchableOpacity>
          <Text style={styles.text} onPress={this.handlesignUp}>
            CRIAR CONTA
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
