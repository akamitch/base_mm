import {wallets} from './wallets_mm.js'

for (let index = 0; index < wallets.length; index++) {
    const wallet = wallets[index]
    console.log(index+1, wallet.address)
}    