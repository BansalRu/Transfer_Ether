pragma solidity ^0.8.0


import "hardhat/console.sol";
import "./FlashLoan";


contract FlashLoanReceiver {
    FlashLoan private pool;
    address private owner;

    constructor (address _poolAddress) {
        pool = FlashLoan(_poolAddress)
        owner = msg.sender;
    }

    function executeFlashLoan(uint _amount) external { 
        pool.FlashLoan(_amount)
    }
}