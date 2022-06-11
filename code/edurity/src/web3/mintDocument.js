import { ethers } from "ethers";
import Web3Modal from "web3modal";
import abi from "../contracts/Edurity.json";
import CONTRACT_ADDRESS from "../contracts/Edurity";
const mintDocument = async (uri) => {
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const edurity = new ethers.Contract(
    CONTRACT_ADDRESS,
    abi,
    provider.getSigner()
  );
  try {
    const transaction = await edurity.mintDocument(uri);
    const txn = await transaction.wait();
    console.log(transaction);
    return {
      doc_id: txn.events[0].args[2].toString(),
      txn_hash: txn.events[0].transactionHash,
    };
  } catch (err) {
    return err;
  }
};

export default mintDocument;
