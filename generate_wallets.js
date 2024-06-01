import {ethers} from 'ethers';
const walletsToGenerate = 100;
console.log("export const wallets = [");
for (let index = 0; index < walletsToGenerate; index++) {
    const randomWallet = ethers.Wallet.createRandom();
    const walletData = {
        privateKey: randomWallet.privateKey,
        mnemonic: randomWallet.mnemonic.phrase,
        address: randomWallet.address
      };
      console.log(JSON.stringify(walletData, null, 2),",");  
    
}
console.log("];");
