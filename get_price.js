//https://www.youtube.com/watch?v=e0MSnHcvDJk&list=PLXiAtWDhSlItE-LG9ou_w5-4Ajp0ETwQ1&index=2
//https://docs.uniswap.org/contracts/v2/reference/smart-contracts/router-02
//https://v2.info.uniswap.org/tokens
//https://docs.uniswap.org/contracts/v2/reference/smart-contracts/v2-deployments
import config from './config.js';
import {ethers} from 'ethers';

export async function getTokenPrice() {
    const ABI = [
        'function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)'
    ]

    const provider = new ethers.JsonRpcProvider(config.rpcProvider)
    const amountInWei = ethers.parseEther(String(config.amountIn))
    const path = [config.WETHAddress, config.tokenAddress] 
    const router = new ethers.Contract(config.uniV2RouterBase, ABI, provider)

    const amounts = await router.getAmountsOut(amountInWei, path)
    const tokenAmounts = Number(ethers.formatUnits(amounts[1].toString(), config.TokenDecimals))
    const price = config.amountIn / tokenAmounts;
    return price;
}

const price = await getTokenPrice();
console.log('price in weth: ',price.toFixed(20));

