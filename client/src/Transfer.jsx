import { useState } from "react";
import server from "./server";
import { secp256k1 } from "ethereum-cryptography/secp256k1.js"
import {utf8ToBytes , toHex, hexToBytes} from 'ethereum-cryptography/utils.js'
import { keccak256 } from "ethereum-cryptography/keccak"

function Transfer({ address, setBalance, privateKey }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();

    try {
      const message = {
        sender: address,
        amount: parseInt(sendAmount),
        recipient,
      }
      message.messageHash = toHex(keccak256(utf8ToBytes(JSON.stringify(message))))
      const sign = secp256k1.sign(message.messageHash, hexToBytes(privateKey));
      message.sign = sign.toCompactHex()
      console.log(message)
      const response = await server.post(`send`, message);
      console.log(response);
      setBalance(response.data.balance);
    } catch (ex) {
      alert(ex.response.data.message);
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
}

export default Transfer;
