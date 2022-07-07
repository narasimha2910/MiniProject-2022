import { ethers } from "ethers";
import Web3Modal from "web3modal";
import abi from "./Edurity.json";
import { db } from "../firebase.config";
import { collection, updateDoc } from "firebase/firestore";

const CONTRACT_ADDRESS = "0xB1aEF9C74f5549d5912764B59c705341E81a7401";

const verifyRecord = async (docId, status) => {
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const edurity = new ethers.Contract(
    CONTRACT_ADDRESS,
    abi,
    provider.getSigner()
  );
  try {
    const transaction = await edurity.verifyDocument(docId, status);
    const txn = await transaction.wait();
    console.log(txn);
    await updateDoc(collection(db, "documents"), { status });
    console.log("Done");
  } catch (err) {
    return err;
  }
};

export default verifyRecord;
