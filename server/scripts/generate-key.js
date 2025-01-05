const { secp256k1 } = require("ethereum-cryptography/secp256k1.js")
const {toHex} = require("ethereum-cryptography/utils.js")


for(let i = 0; i < 3; i++) {
    const PrivateKey = secp256k1.utils.randomPrivateKey()
    console.log(`Private key: ${toHex(PrivateKey)}`)
    console.log(`Public Key: ${toHex(secp256k1.getPublicKey(PrivateKey))}`)
}


