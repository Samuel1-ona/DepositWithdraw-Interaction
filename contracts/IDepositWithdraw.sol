// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

interface IDepositWithdraw {

function createContract() external;
 function getDepositWithdraw() public view returns (DepositWithdraw[] memory);

  function deposit() external payable;

  function withdraw(uint256 amount) external;

   function getBalance() public view returns (uint256);

  
    
}