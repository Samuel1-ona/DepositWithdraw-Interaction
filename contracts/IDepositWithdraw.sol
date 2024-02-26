// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "./DepositWithdraw.sol";

interface IDepositWithdraw {



  function deposit() external payable;

  function withdraw(uint256 amount) external;

   function getBalance() external view returns (uint256);

    function createContract() external;

    function getDeployedContracts() external view returns (DepositWithdraws[] memory);


  
    
}