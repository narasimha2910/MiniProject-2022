import { ethers } from "ethers";
import Web3Modal from "web3modal";
import abi from "../contracts/Edurity.json";
import CONTRACT_ADDRESS from "../contracts/Edurity";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
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
    let documents = [];
    transaction.forEach(async (txn) => {
      const uri = await edurity.tokenURI(txn.toString());
      const metaData = await fetch(uri).then((data) => data.json());
      const status = await edurity.getStatus(txn.toString());
      const q = query(collection(db, "documents"), where("doc_id", "==", "8"));
      const querySnapshot = await getDocs(q);
      let txnHash = "";
      querySnapshot.forEach((doc) => (txnHash = doc.data().txn_hash));
      documents.push({
        docId: txn.toString(),
        metaData,
        status: status.toString(),
        txnHash,
      });
    });
    return { documents };
  } catch (err) {
    return err;
  }
};

export default getRecordsOfOwner;
