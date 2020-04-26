'use strict';

/**
 * @typedef Token
 * @property {string} address - token contract address
 * @property {string} name - display name
 * @property {string} symbol - symbol
 * @property {number} decimals - decimals ot the token
 */

export const tokens = [
  {
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    name: "Dai",
    symbol: "dai",
    decimals: 18
  },
  {
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    name: "USDC",
    symbol: "usdc",
    decimals: 6
  },
  {
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    name: "USDT",
    symbol: "usdt",
    decimals: 6
  }
];