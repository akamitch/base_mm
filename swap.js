import {ethers} from 'ethers';
//import {utils} from 'ethers/lib/utils';
import UniswapV2Router02 from '@uniswap/v2-periphery/build/UniswapV2Router02.json' assert { type: 'json' };
import ERC20Abi from '@openzeppelin/contracts/build/contracts/ERC20.json' assert { type: 'json' };
import config from './config.js';
import wallets from './wallets.js';

// Define the token addresses and amounts
const tokenIn = config.WETHAddress; // Token
const tokenOut = config.tokenAddress; // WETH
const amountIn = ethers.parseUnits('1', config.TokenDecimals); // 1 Token

// Define the Uniswap router address
const routerAddress = config.uniV2RouterBase;

// Connect to the Ethereum provider
const provider = new ethers.JsonRpcProvider(config.rpcProvider);

// Create a wallet instance (you can use a private key or mnemonic)
const wallet = ethers.Wallet.fromPhrase(wallets[0].mnemonic).connect(provider);

// Create a contract instance for the Uniswap router
const router = new ethers.Contract(
  routerAddress,
  UniswapV2Router02.abi,
  wallet
);

// Define the path for the swap (tokenIn -> WETH -> tokenOut)
const path = [tokenIn, tokenOut];

// Calculate the deadline for the swap (5 minutes from now)
const deadline = Math.floor(Date.now() / 1000) + (60 * 5);

// Approve the router to spend the tokenIn amount
const tokenInContract = new ethers.Contract(tokenIn, ERC20Abi.abi, wallet);
await tokenInContract.approve(routerAddress, amountIn);

// Set your desired gas price (in Gwei)
const gasPrice = ethers.parseUnits('0.2', 'gwei');

// Set your desired gas limit
const gasLimit = 300000;

// Execute the swap with custom gas settings
const tx = await router.swapExactTokensForTokens(
    amountIn,
    0,
    path,
    wallet.address,
    deadline,
    {
      gasPrice,
      gasLimit
    }
  );

console.log(`Swap transaction sent: ${tx.hash}`);