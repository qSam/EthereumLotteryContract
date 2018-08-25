const path = require('path');
const fs = require('fs');
const solc = require('solc');

//Set path to fetch solidity file that needs to be compiled
const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

//Call the solidity compiler
module.exports = solc.compile(source, 1).contracts[':Lottery'];
