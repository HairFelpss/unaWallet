import Web3 from 'web3';
import abi from './abi';
import firebase from "react-native-firebase";

export default class WalletService { 
    constructor(){
        const deployedAddress = '0x1a84696dd909e41f731392a68118916d977a7dfd'
        const provider = new Web3.providers.HttpProvider('rinkeby.infura.io/7c761a7016e3428f8872ed02fc5b3014');
        this.web3 = new Web3(provider);
        this.contract = new web3.eth.Contract(abi, deployedAddress);
        const accountStr = await firebase.auth().currentUser;
        let account;
        if(accountStr){
            account = JSON.parse(accountStr)
        } else {
            account = this.createAccount();
        }
        this.web3.eth.accounts.wallet.add(account)
        this.web3.eth.defaultAccount = account.address;
        this.address = account.address;
    }
    createAccount = () => {
        const account = this.web3.eth.accounts.create();
        const current = { address: account.adress, privateKey: account.privateKey};
        return account;
    }
    async balanceOf() {
        const balance = await this.contract.methods.balanceOf(address).call();
        return balance;
      }

      async approve(addressSpender, quantity) {
        const approve = await this.contract.methods.approve(addressSpender, quantity).call();
        return approve;
      }
    
      async transferFrom(addressFrom, addressTo, quantity) {
        const transferFrom = await this.contract.methods.transferFrom(addressFrom, addressTo, quantity).call();
        return transferFrom;
      }

      async allowance(address, addressSpender) {
        const allowance = await this.contract.methods.allowance(address, addressSpender).call();
        return allowance;
      }
    
      transfer(addressTo, quantity) {
        const accounts = this.web3.eth.getAccounts();
        this.contract.methods.transfer(addressTo, quantity).send({
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