 # DepositWithdraws Smart Contract

The DepositWithdraws contract is a Solidity smart contract designed for Ethereum-based blockchain networks. This contract allows users to deposit and withdraw Ether (ETH) to and from the contract, effectively acting as a simple banking system where each user's balance is tracked securely on the blockchain.
Features

   Owner Identification: The contract identifies the creator (deployer) as the owner upon deployment.
    Deposit Functionality: Users can deposit ETH into the contract. The deposit must be greater than 0 ETH.
    Withdraw Functionality: Users can withdraw ETH from their balance, assuming they have enough funds in the contract.
    Balance Tracking: Each user's balance is tracked in a mapping, ensuring secure and clear record-keeping.
    Event Logging: Deposits and withdrawals are accompanied by events (Deposit and Withdraw), facilitating easy tracking of transactions on the blockchain.

 # Contract Functions
deposit()

   Allows a user to deposit ETH into the contract.
    The transaction value (msg.value) must be greater than 0.
    Emits a Deposit event.

# withdraw(uint256 amount)

  Allows a user to withdraw ETH from their balance in the contract.
    The user must have a sufficient balance to cover the withdrawal amount.
    Emits a Withdraw event.

# getBalance()

   Returns the contract's total ETH balance.
    This function provides a view of the contract's aggregated balance and does not affect any user's individual balance.

Events

   Deposit(address indexed from, uint256 amount): Logs a deposit, including the sender's address and the amount deposited.
    Withdraw(address indexed to, uint256 amount): Logs a withdrawal, including the recipient's 
