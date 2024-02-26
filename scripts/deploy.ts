import { ethers } from "hardhat";

async function main() {
    const DepositWithdraw = await ethers.deployContract("DepositWithdrawFactory");

    await DepositWithdraw.waitForDeployment();

  console.log(`DepositWithdraw deployed to ${DepositWithdraw.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
