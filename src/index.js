
import './global';
import "~/Config/ReactotronConfig";
import React, { Component } from "react";

import firebase from "react-native-firebase";
import createNavigator from "./routes";
import Web3 from 'web3';

export default class App extends Component {
    state = {
        loading: true,
        authenticated: false
    };

    componentWillMount() {
        const web3 = new Web3(
            new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/7c761a7016e3428f8872ed02fc5b3014')
        );

        web3.eth.getBlock('latest').then(console.log)
    }


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
