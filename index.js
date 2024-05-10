const ethers = require('ethers');

// Generate a new random wallet
const randomWallet = ethers.Wallet.createRandom();

// Log the private key and mnemonic
console.log("Private Key:", randomWallet.privateKey);
console.log("Mnemonic (Seed Phrase):", randomWallet.mnemonic.phrase);
console.log("Address:", randomWallet.address);