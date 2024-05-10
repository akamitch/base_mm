//https://www.youtube.com/watch?v=e0MSnHcvDJk&list=PLXiAtWDhSlItE-LG9ou_w5-4Ajp0ETwQ1&index=2
//https://docs.uniswap.org/contracts/v2/reference/smart-contracts/router-02
//https://v2.info.uniswap.org/tokens
//https://docs.uniswap.org/contracts/v2/reference/smart-contracts/v2-deployments
//import config from './config.js';
import {ethers} from 'ethers';

//const ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D' // uniswap router eth-mainnet
const ADDRESS = '0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24'
                    
const ABI = [
    'function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)'
]

//alchemy alcht_OWaSdXX2HDYc6jgGLkBOYBJ5CPOAND
//https://{network}.g.alchemy.com/v2/{apiKey}
//https://base.g.alchemy.com/v2/alcht_OWaSdXX2HDYc6jgGLkBOYBJ5CPOAND
//const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/52430e2606464bddaf6d6f07f628258f')
const provider = new ethers.JsonRpcProvider('https://base-mainnet.g.alchemy.com/v2/alcht_OWaSdXX2HDYc6jgGLkBOYBJ5CPOAND')
const amountIn = ethers.parseEther('1')
//const path = ['0x4200000000000000000000000000000000000006', '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'] //base weth-usdc
const path = ['0x4200000000000000000000000000000000000006', '0xb16274a0882fa01F921c5F9141e389Ee747f803F'] //base weth-cmb

//const path = ['0x70737489DFDf1A29b7584d40500d3561bD4Fe196', '0x4200000000000000000000000000000000000006'] //base weth-bored
//const path = ['0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed', '0x4200000000000000000000000000000000000006'] //base weth-degen
//const path = ['0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', '0xdAC17F958D2ee523a2206206994597C13D831ec7'] //eth
const router = new ethers.Contract(ADDRESS, ABI, provider)
const main = async () => {
    const amounts = await router.getAmountsOut(amountIn, path)
    //const price = ethers.formatUnits(amounts[1].toString(), 6) //for usdc
    const price = Number(ethers.formatUnits(amounts[1].toString(), 18))
    console.log(price)
}
main()

