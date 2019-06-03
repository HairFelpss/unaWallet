import React, { Component } from 'react';
import web3 from '../../Config/web3'
import wallet from '../../Config/Abi'
import { console } from 'node-libs-browser';

class Wallet extends Component {

    constructor(props){
      super(props);
  
      this.state = {approve : '', transfer:'', transferFrom: '', allowance: '', balance: '', message:''};
    }
  
   async  componentDidMount(){
      const approve = await wallet.methods.approve().call();
      const transfer = await wallet.methods.transfer().call();
      const transferFrom = await wallet.methods.transferFrom();
      const allowance = await wallet.methods.allowance();
      const balance = await web3.eth.balanceOf(wallet.options.address);
  
      this.setState({approve,transfer,transferFrom, allowance, balance});
    }
  
    onSubmit = async (event)=>{
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
  
        console.log(accounts)
    };
  
    render() {
      return (
          <div>
            <h1> Multi Party wallet systems  </h1>
            <p> This is approval is requested by {this.state.approve}</p>
            <br/>
            <p> This is approval will be received By {this.state.transfer}</p>
            <br/>
            <p> This is approval amount is :  { this.state.balance} Wei </p>
            <hr/>
            <form onSubmit={this.onSubmit}>
              <h3>Approve the contract</h3>
              <div>
                <input
                  value = {this.state.value}
                  onChange = { event => this.setState({value : event.target.value})}
                />
                <button>Aprove the contract</button>
              </div>
            </form>
            <hr/>
            <h3>{this.state.message}</h3>
          </div>
  
      );
    }
  }
  
  export default Wallet;