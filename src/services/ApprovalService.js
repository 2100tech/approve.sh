'use strict';

import * as PlatformService from './PlatformService.js';
import * as TokenService from './TokenService.js';

var web3 = null;

/**
 * @typedef Approval
 * @property {string} owner - approval's owner
 * @property {Platform} platform - the platform has been approved
 * @property {Token} token - erc20 token
 * @property {string} balance - owner's token balance
 * @property {string} allowance - allowance
 */

export function initService(web3Instance) {
  web3 = web3Instance;
}

export async function fetchAccountApprovals(account) {
  const tokens =  TokenService.tokens;
  const platforms = PlatformService.platforms;
  var approvals = [];

  tokens.forEach(function(token) {
    let ERC20token = new web3.eth.Contract(require(`@/abi/${token.symbol}.json`), token.address);

    platforms.forEach(async function(platform) {
      let allowance = await fetchTokenAllowance(ERC20token, account, platform.address);
      let balance = await getTokenBalance(ERC20token, account);

      if (allowance != "0") {
        let approval = {
          owner: account,
          platform: platform,
          token: token,
          balance: balance,
          allowance: allowance
        };

        approvals.push(approval);
      }
    });
  });

  return approvals;
}

export async function fetchTokenAllowance(token, owner, spender) {
  return new Promise((resolve, reject) => {
    token.methods.allowance(owner, spender).call()
      .then(result => {
        resolve(result);
      })
      // FIXME: solve error message
      .catch(error => {
        reject(error);
        console.log('Failed: ', error.message)
      });
  });
}

export async function getTokenBalance(token, owner) {
  return new Promise((resolve, reject) =>  {
    token.methods.getBalance(owner).call()
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
        console.log('Failed: ', error.message);
      })
  });
}

/**
 * Fetch all supported platforms
 * @returns {import('./PlatformService.js').Platform[]}
 */
export function fetchAllPlatforms() {
  return PlatformService.patforms;
}

// /**
//  * Fetch account's approved platforms
//  * @param {string} account - account's address
//  * @returns {import('./PlatformService.js').Platform[]}
//  */
// export function fetchAccountApprovedPlatforms(account) {
  
// }