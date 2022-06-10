import { ethers } from "ethers";
import Web3Modal from "web3modal";
import abi from "../contracts/Edurity.json";
import CONTRACT_ADDRESS from "../contracts/Edurity";
const getRecordsOfOwner = async (owner) => {
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const edurity = new ethers.Contract(
    CONTRACT_ADDRESS,
    abi,
    provider.getSigner()
  );
  try {
    const transaction = await edurity.getRecordsOfOwner(owner);
    console.log(transaction);
    //    return transaction
    const uris = [];
    transaction.forEach(async (txn) => {
      const uri = await edurity.tokenURI(txn.toString());
      uris.push(uri);
    });
    console.log(uris);
    const status = await edurity.getStatus("1");
    console.log(status.toString());
  } catch (err) {
    return err;
  }
};

export default getRecordsOfOwner;
