# ECDSA Transaction Simulator

The ECDSA Transaction Simulator is an enhanced implementation of the Elliptic Curve Digital Signature Algorithm (ECDSA) for simulating Ethereum-like transactions. This project builds on the foundation of the `ecdsa-node` repository by introducing new features, improvements, and a user-friendly interface for understanding and interacting with digital signatures in a decentralized context.

## Features

- **Transaction Simulation**: Simulate Ethereum-like transactions with public and private key pairs.
- **Enhanced Security**: Use ECDSA to securely sign and verify transactions.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or Yarn

### Installation

1. Clone the repository:
```bash
   git clone https://github.com/mansoorkhateeb/ecdsa-transaction-simulator.git
```
2. Navigate to the project directory:
```bash
        cd ecdsa-transaction-simulator
```
3. Install dependencies:
```bash
        npm install
```
### or
```bash
        yarn install
```
##Usage
1. Start the development server:
```bash
    npm Start
```
    ### or
```bash
     yarn Start
```
2. Open the application in your browser at http://localhost:3000.

## Sample keys (for testing)
Private key: `22b210b4a5e30d6e0607c202ab838c31dd913f8e072761b9d7286555924459c7`
Public Key: `022154f64383ed32c38b9fb292c5a2dc49e5345f64874c0ee1276a6550002fc609`

Private key: `e520efffc47080fa9e476a83e2a980b41c2f55514f12c105a794741ed89cf398`
Public Key: `02fbc735a49404d59c3d26f21e8c7a88b7b02f64674260388e41e1e88ca8a7399d`

Private key: `86d49f4428a6b8b21bf7ef7da340e6190112e739eae4853d77ba3327f8c94a60`
Public Key: `02905d2cee04142ae8147f1595eed321f12d7b53b61cf9f246f53ff07060bdfad0`

## How It Works
- Generate Keys: Create a public and private key pair for signing transactions.
- Sign Transactions: Use the private key to sign transactions, ensuring they are secure and verifiable.
- Verify Transactions: Verify the authenticity of transactions using the corresponding public key.
- Simulate Decentralized Flow: Observe how transactions are processed and verified in a simulated Ethereum-like environment.
## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes or suggestions.

## License
This project is licensed under the MIT License. See the LICENSE file for details.