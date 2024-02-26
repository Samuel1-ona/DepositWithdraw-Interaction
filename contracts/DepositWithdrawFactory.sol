// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "./DepositWithdraw.sol"; // Corrected import statement to match the file name

contract DepositWithdrawFactory {
    DepositWithdraws[] public contracts;
    event ContractCreated(address contractAddress);

    function createContract() external {
        DepositWithdraws newContract = new DepositWithdraws();
        contracts.push(newContract);
        emit ContractCreated(address(newContract));
    }

    function getDeployedContracts() external view returns (DepositWithdraws[] memory) {
        return contracts;
    }
}


