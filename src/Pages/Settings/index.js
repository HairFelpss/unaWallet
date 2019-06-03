import React, { Component } from "react";
import firebase from "react-native-firebase";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { colors } from "~/styles";

import styles from "./styles";

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: []
    };
    this.handleUserInfo();
  }
  handleUserInfo = async () => {
    const currentUser = await firebase.auth().currentUser;
    const userID = currentUser.uid;
    const userInfo = await firebase
      .firestore()
      .doc(`users/${userID}`)
      .get()
      .then(doc => {
        if (doc.exists) {
          return doc.data();
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          return null;
        }
      })
      .catch(function(error) {
        return console.log("Error getting document:", error);
      });
    this.setState({ userInfo: userInfo });

  };
  handleLogout = () => {
    if (!firebase.auth().signOut()) return null;

    this.goTo("SignIn");
  };

  goTo = () => {
    const { navigation } = this.props;

    navigation.navigate("Home");
  };

  render() {
    const userInfo = this.state.userInfo;
    return (
      <View style={styles.container}>

      <Image
          style={styles.logo}
          source={require("~/Assets/Img/exemplo.jpg")}
       />

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder={userInfo.firstName + ' ' + userInfo.lastName}
          placeholderTextColor={colors.light}
          underlineColorAndroid="transparent"

        />
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder={userInfo.email}
          placeholderTextColor={colors.light}
          underlineColorAndroid="transparent"

        />
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="numero de telefone"
          placeholderTextColor={colors.light}
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.formContainer}>
      <TouchableOpacity style={styles.buttonPassword} onPress={this.handleLogout}>
          <Text style={styles.textButton}>Esqueci a senha</Text>
      </TouchableOpacity>
      </View>



        <TouchableOpacity style={styles.button} onPress={this.goTo}>
          <Text style={styles.textButton}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
