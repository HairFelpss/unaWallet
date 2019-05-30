import firebase from "react-native-firebase";
import Web3 from 'web3';
import abi from './abi';

export default class Wallet{
    constructor() {
        const web3 = new Web3(
            new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/7c761a7016e3428f8872ed02fc5b3014')
        );
        web3.eth.getBlock('latest').then(console.log)
      this.contract = new this.web3.eth.Contract(abi, '0x74ce08f5724243bcd3a514573b404f61713ac95e');
      const accountStr = await firebase.auth().currentUser;
      let account;
      if(accountStr) {
        account = JSON.parse(accountStr);
      } else {
        account = this.createAccount();
      }
  
      this.web3.eth.accounts.wallet.add(account);
      this.web3.eth.defaultAccount = account.address;
      this.address = account.address;
    }
  
    createAccount() {
      const account = this.web3.eth.accounts.create();
      const current = { address: account.address, privateKey: account.privateKey };
      localStorage.setItem('account', JSON.stringify(current));
      return account;
    }
  
    async balance() {
      const balance = await this.contract.methods.balanceOf(this.address).call();
      return balance;
    }
  
    transfer(address, quantity) {
      const accounts = this.web3.eth.getAccounts();
      this.contract.methods.transfer(address, quantity).send({
        from: accounts[0],
        gas: '1000000'
      });
    }
  
    isValidAddress(address) {
      return this.web3.utils.isAddress(address);
    }
  
    getAddress() {
      return this.address;
    }
  
  }
  

