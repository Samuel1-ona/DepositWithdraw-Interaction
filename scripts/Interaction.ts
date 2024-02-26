import { ethers } from "hardhat";

async function main() {
  const DepositWithdrawAddress = "0xf1AAdcB6a536d22b463cb6B693B7F53EdD585b87";

  const DepositWithdrawContract = await ethers.getContractAt(
    "IDepositWithdraw",
    DepositWithdrawAddress
  );

  const AmountDeposit = ethers.parseEther("0.5");

  const DepositTx = await DepositWithdrawContract.deposit({ value: AmountDeposit });


  console.log(DepositTx);
  await DepositTx.wait();


  const withdrawAmount = DepositWithdrawContract.withdraw(AmountDeposit);

  

  console.log(withdrawAmount);
  
  

  
  const getBalances = await DepositWithdrawContract.getBalance();

  console.log(getBalances);




}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
