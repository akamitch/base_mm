import wallets from './wallets.js';
import {ethers} from 'ethers';

// Your mnemonic phrase
const mnemonic = wallets[0].mnemonic;

// Create a wallet instance using the mnemonic
const wallet = ethers.Wallet.fromPhrase(mnemonic);
//fromMnemonic(mnemonic);

// Print the address of the wallet
console.log("Wallet Address:", wallet.address);

// You can now use this wallet instance to interact with the Ethereum network
//console.log(wallets[0].mnemonic);