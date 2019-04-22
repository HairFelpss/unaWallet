import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import Firebase from "~/services/Firebase";

import createNavigator from "./routes";

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem("@UnaWallet:email");

    this.setState({
      userChecked: true,
      userLogged: !!username
    });
  }

  render() {
    const { userChecked, userLogged } = this.state;
    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);
    return <Routes />;
  }
}

/* export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>oi</Text>
      </View>
    );
  }
}
*/
