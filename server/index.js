const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const { secp256k1 } = require("ethereum-cryptography/secp256k1.js");

app.use(cors());
app.use(express.json());

const balances = {
  "022154f64383ed32c38b9fb292c5a2dc49e5345f64874c0ee1276a6550002fc609": 100,
  "02fbc735a49404d59c3d26f21e8c7a88b7b02f64674260388e41e1e88ca8a7399d": 50,
  "02905d2cee04142ae8147f1595eed321f12d7b53b61cf9f246f53ff07060bdfad0": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  console.log( `req`)
  const { sender, recipient, amount, sign, messageHash } = req.body;
  const isSigned = secp256k1.verify(sign, messageHash, sender);
  if(isSigned === false) {
    res.status(400).send({ message: "Invalid signature!" });
  }
  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
