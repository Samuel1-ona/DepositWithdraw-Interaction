// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "./DepositWithdraw.sol";

contract DepositWithdrawFactory {
    DepositWithdraw[] public contracts;

    event DepositWithdrawCreated(address contractAddress);

    function createContract() public {
        DepositWithdraw newContract = new DepositWithdraw();
        contracts.push(newContract);
        emit DepositWithdrawCreated(address(newContract));
    }

    function getDepositWithdraw() public view returns (DepositWithdraw[] memory) {
        return contracts;
    }
}
