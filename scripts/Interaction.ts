import { ethers } from "hardhat";

async function main() {
  const DepositWithdrawAddress = "0xefA7761E08B24fa447f75fD6BF6FA8a2E75Ace79";

  const depositWithdrawContract = await ethers.getContractAt(
    "IDepositWithdraw",
    DepositWithdrawAddress
  );

  //   const amountDeposit = ethers.parseEther("0.01");

  console.log("Before");

  const depositTx = await depositWithdrawContract.createContract();
  console.log("During");
  await depositTx.wait();
  console.log("after");

  console.log(depositTx);

  //   const withdrawAmount = DepositWithdrawContract.withdraw(AmountDeposit);

  //   console.log(withdrawAmount);

  //   const getBalances = await DepositWithdrawContract.getBalance();

  //   console.log(getBalances);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
