import "~/Config/ReactotronConfig";
import React, { Component } from "react";

import firebase from "react-native-firebase";
import createNavigator from "./routes";

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false
  };

  async componentDidMount() {
    const username = await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("usuario ", user);
      } else {
        console.log("nao ha usuarios logados");
      }
    });

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
