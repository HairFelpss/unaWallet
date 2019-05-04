import "~/Config/ReactotronConfig";
import React, { Component } from "react";

import firebase from "react-native-firebase";
import createNavigator from "./routes";

export default class App extends Component {
  state = {
    loading: true,
    authenticated: false
  };

  async componentDidMount() {
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loading: false, authenticated: true });
      } else {
        this.setState({ loading: false, authenticated: false });
      }
    });
  }

  render() {
    const { loading, authenticated } = this.state;
    if (loading) return null;

    const Routes = createNavigator(authenticated);
    return <Routes />;
  }
}
