

# zkPrivacy Protocol - Short description

zkPrivacy is a privacy solution with transparent regulation utilizing zk proof to enhance privacy and leveraging Chainlink to ensure regulatory transparent.


# zkPrivacy Protocol - Description

zkPrivacy is a privacy solution with transparent regulation based on Mantle utilizing zk proof to enhance privacy. 

It accepts user deposit in Native Token, and allows withdrawals from any address on the Mantle network. Breaks the link between deposit and withdrawal addresses to ensure asset privacy with each transaction.

It mainly has the following important features:

- Privacy with no limit on the number of users: Use zk to protect privacy, and use merkletree to store the users. In order to break through the limitations of numbers of merkletree leaf, a 10 levels is used for a single merkletree, but when withdraw, 32 random merkletree roots will be used to reach near 1 million numbers of anonymous set.

- Transparent Reulation: Use the ring signature principle to generate a multi-signature supervision public key the. One of the multi-signature private keys will be encrypted and secretly stores through Chainlink.Functions to ensure decentralization of supervision. When user depost, the withdraw nullifierhash needs to be encrypted using supervision public key built into zk deposit proof. If a user is confirmed to be an illegal user, the decryption proof is first jointly generated by natural persons, and finally submitted to Chainlink.Functions to perform final verification and decryption. The final decryption result will be written back to the chain. Due to the supervision mechanism, illegal users are blocked. And no one can collect users information off-chain and decrypt it privately, because the final decryption is on Chainlink, which requires an on-chain request, and this operation has a cost. Therefore, regulators have no incentive to decrypt the privacy of normal users except illegal users. In addition, the decrypted information will be disclosed on the chain, and this is also a form of public supervision for regulators.


# How it's made
## Structure of project

The zkPrivacy protocol consists of the following parts:

- Circuits: Including deposite circuit and withdraw circuit. Pedersen hash algorithem will be used for merkletree calculations, and Baby Jubjub Elliptic Curve used for encryption and decryption. When deposit, there are two inputs and two outputs. A random big number as secret note for user is the private input and the supervision public key is for the public input. 
The deposit circuit will calculate the user's public key and withdraw nullifier with secret note as private key and the withdraw nullifier will be encrypted by supervision public key. The hash of user's public key and encrypted withdraw nullifier are outputs. When withdraw, similar with deposit, but will encrypt user's public key. And also the args for merkletree root check are needed for withdraw proof. Both encrypted user's public key and withdraw nullifier can be decrypted by supervision public key to link each other so that can link the depositor and withdrawer. But as mentioned above, the regulation is transparent and will be expensive to decrypt the user's information.


- Contract: Including main solidity contracts and chainlink contracts. A 10 levels is used for a single merkletree in main solidity contract, and the number of merkletree is no limitation. When withdraw, 32 random merkletree roots will be used to reach near 1 million numbers of anonymous set. So it is very flexible with no limit on the number of users. The chainlink contract is use for decentralizing regulation. It will check the decryption proof and do a final decryption. The decryption results will be witten to blockchain. So all decryption informations are public. 


## Technologies Used
- zk: zk is used for merkletree proof, so user's information is protected, no one can link the desopitor and withdrawer to achieve privacy of user transactions.

- Ring signature: The protocol uses it for valid the proof of multi-signature supervision public key, and also valid the decryption proof. It allows multi supervisors, but need all supervisors'proof to decrypt.

- Chainlink Functions: This is the most important part for zkPrivacy protocol. Chainlink Functions allows users to provide encrypted secret values, which can be used when the DON executes a Functions request. The protocol takes advantage of this feature, and upload one of private key of multi-signature private keys to Chainlink. No one can get this private key including Chainlink. The final decryption will be process on Chainlink, making the regultion decentralization and public.








# Motivation

As we know, transactions can be traced on the Mantle, so it is very important to protect personal property information from being traced.

Currently there are a variety of solutions, such as privacy solutions with central server, and completely transparent solutions.

For the privacy solutions with central server, have been questioned because user information may be collected.

And for the completely transparent solutions, such as Tornodao.cash which is very famous ZKP protocol, is banned because it is completely open to users and becomes a criminal tool for illegal users.

How to ensure the privacy of legal users and reject the use of illegal users has become an incompatible matter for privacy protocols. Unfortunately, there is currently no protocol that can handle compliance and privacy well.

But now, the zkPrivacy protocol is coming. This is currently the only protocol on the entire network that can take into account both compliance and privacy.


# Regulation
## Regulatory public key
We set up a regulatory public key, which is generated by several private keys. 

One of the private keys is unknown to everyone and is stored on Chainlink. No one can obtain it. The security is guaranteed by Chainlink.

Other private keys are kept by natural persons.

## Feasibility
When user makes a deposit or withdraws money, user needs to use this regulatory public key to encrypt the corresponding withdraw or depositor and save on chain.

When a user is confirmed to be an illegal user, the decryption proof is first jointly generated by natural persons, and finally submitted to the chain, and Chainlink performs final verification and decryption. The final decryption result will be written back to the chain.

Due to the supervision mechanism, illegal users are blocked.

No one can collect users information off-chain and decrypt it privately, because the final decryption is on Chainlink, which requires an on-chain request, and this operation has a cost. 

Therefore, regulators have no incentive to decrypt the privacy of normal users except illegal users. In addition, the decrypted information will be disclosed on the chain, and this is also a form of public supervision for regulators.

# zkProof
When deposit or withdrawal, zkproof needs to be generated.

We have improved the protocol so that there is no limit on the number of users and lower fees



# Comparison

| Protocol | Regulation |Max Users | Deposit Fee(gas) | Withdraw Fee(gas) | Max Anonymous Set(numbers) |
|------|------|------|------|------|----------|
| Tornado |No|1,048,576| 1,042,993 | 272,756 | 1,048,576|
| zkPrivacy |Yes|No limit| 795,270 | 578,429 | 983,040|

-----------

