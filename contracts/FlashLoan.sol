pragma solidity ^0.8.0

import "hardhat/console.sol";
import "./Token.sol";
import "@openzepplin/contracts/utils/math/SafeMath.sol";


contract FlashLoan {
    using SafeMath for uint256;
    Token public token;
    uint256 public poolBalance;

    constructor(address _tokenAddress) {
        token = Token(_tokenAddress)
    }

    function depositTokens(uint256 _amount) external {
        token.transferFrom(msg.sender, address(this),  _amount);
        poolBalance = poolBalance.add(_amount)
    }

    function flashLoan(uint256 _borrowAmount) external {
        console.log("_borrowAmount", _borrowAmount)
    }

}