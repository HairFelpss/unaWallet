import React, { Component } from 'react';
import WalletServiceService from '../../Config/web3'

class WalletService extends Component {

    constructor(props){
      super(props);
  
      this.state = {approve : '', transfer:'', transferFrom: '', allowance: '', balance: '', message:''};
    }
  
   async componentDidMount(){
      const approve = WalletService.approve();
      const transfer = WalletService.transfer();
      const transferFrom = WalletService.transferFrom();
      const allowance = WalletService.allowance();
      const balance = WalletService.balanceOf(WalletService.options.address);
  
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
            <h1> Multi Party WalletService systems  </h1>
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
  
  export default WalletService;