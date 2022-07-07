import { ethers } from "ethers";
import Web3Modal from "web3modal";
import abi from "./Edurity.json";
import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

const CONTRACT_ADDRESS = "0xB1aEF9C74f5549d5912764B59c705341E81a7401";

const getAllRecords = async () => {
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const edurity = new ethers.Contract(
    CONTRACT_ADDRESS,
    abi,
    provider.getSigner()
  );
  try {
    const documents = [];
    const querySnapshot = await getDocs(collection(db, "documents"));
    querySnapshot.forEach(async (doc) => {
      const transaction = await edurity.getRecord(doc.data().doc_id);
      const uri = await edurity.tokenURI(transaction.fileId.toString());
      const metaData = await fetch(uri).then((data) => data.json());
      const status = await edurity
        .getStatus(transaction.fileId.toString())
        .then((stat) => stat.toString());
      if (status === "0")
        documents.push({
          docId: doc.data().doc_id,
          metaData,
          metaUri: uri,
          owner: transaction.owner,
        });
    });
    return { documents };
  } catch (err) {
    return err;
  }
};

export default getAllRecords;
