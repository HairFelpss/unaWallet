import React, { Component } from "react";

import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { colors } from "~/styles";
import styles from "./styles";
import firebase from "react-native-firebase";


export default class Receive extends Component {
  constructor(props) {
    super(props);
    this.state = {
     userWallet: '',
     getAddress: false
    };
   
  }
  goTo = () => {
    const { navigation } = this.props;

    navigation.navigate("Home");
  };

  handleWalletInfo = async () => {
    const currentUser = await firebase.auth().currentUser;
    const userID = currentUser.uid;
    this.setState({userWallet: userID})
  } 

  handleChangeAddress = () => {
    this.setState({getAddress : true})
    this.handleWalletInfo();
  }

  render() {
    const {userWallet, getAddress} = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Receive UnaCoins</Text>
        <View style={styles.formContainer}>
       
       {!getAddress ?  
          <TextInput
            style={styles.input}
            placeholder='Your Wallet Address'
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
          />
        :
        <TextInput
            style={styles.input}
            placeholder={userWallet}
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
            editable = {false}
          />
        }
        </View>
        <TouchableOpacity>
          <Text style={styles.text} onPress={this.handleChangeAddress}>
          Confirm
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text} onPress={this.goTo}>
          Voltar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
