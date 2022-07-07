import { FaSearch } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import RecordData from "../components/RecordData";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import abi from "../contracts/Edurity.json";
import CONTRACT_ADDRESS from "../contracts/Edurity";
import SearchResult from "../components/SearchResult";
const statusEnum = {
  0: "PENDING",
  1: "VERIFIED",
  2: "REJECTED",
};

const Search = ({ setActive, connectToWallet, address }) => {
  const [recId, setRecId] = useState(null);
  const [res, setRes] = useState([]);
  useEffect(() => {
    setActive(4);
    // connectToWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="h-[88.5vh] relative font-display">
        <div className="h-full w-10 bg-black mr-2 opacity-20 absolute left-60 -z-10"></div>
        <div className="h-full w-10 bg-black mr-2 opacity-20 absolute right-60 -z-10"></div>
        <div className="w-[59.5rem] h-10 bg-black mr-2 opacity-20 absolute top-24 left-60 -z-10"></div>
        <div className="h-full w-full flex flex-col justify-start items-center">
          <h1 className="text-6xl my-4">SEARCH ON EDURITY</h1>
          <div className="w-1/2 relative">
            <input
              type="text"
              placeholder="Txn ID / Document ID / Contract Address ..."
              value={recId}
              onChange={(e) => setRecId(e.target.value)}
              className="border-2 border-black bg-white text-black text-2xl rounded-full w-full focus:outline-none px-5 py-2"
            ></input>
            <FaSearch
              className="h-5 w-5 absolute text-black cursor-pointer top-4 right-5"
              onClick={async () => {
                const web3Modal = new Web3Modal();
                const connection = await web3Modal.connect();
                const provider = new ethers.providers.Web3Provider(connection);
                const edurity = new ethers.Contract(
                  CONTRACT_ADDRESS,
                  abi,
                  provider.getSigner()
                );
                try {
                  const txn = await edurity.getRecord(recId);
                  console.log(txn);
                  const fileId = txn.fileId.toString();
                  const owner = txn.owner
                  const uri = await edurity.tokenURI(fileId);
                  const metaData = await fetch(uri).then((data) => data.json());
                  const status = await edurity
                    .getStatus(fileId)
                    .then((stat) => stat.toString());
                  console.log(status);
                  console.log(metaData);
                  const rec = [
                    {
                      fileId,
                      uri,
                      owner,
                      name: metaData.name,
                      status,
                      image: metaData.image,
                    },
                  ];
                  setRes(rec);
                } catch (e) {
                  console.error(e);
                }
              }}
            />
          </div>
          <div className="px-5 mt-16 w-5/6">
            {/* <RecordData
              docName={"SSLC record"}
              docId={2}
              status={"PENDING"}
              txnHash={"0x12345678..."}
            /> */}
            {res &&
              res.map((r, idx) => (
                <RecordData
                  docName={r.name}
                  docId={r.fileId}
                  status={statusEnum[r.status]}
                  owner={r.owner}
                  recView={r.image}
                  key={r.fileId}
                  metaUri={r.uri}
                />
              ))}
          </div>
        </div>
      </div>
      {/* <div className="   h-full w-10 bg-black mr-2 opacity-20 absolute left-60"></div>
      <div className="   h-full w-10 bg-black mr-2 opacity-20 absolute right-60"></div>

      <div className=" absolute left-[17.5rem] mt-[13rem] h-10  bg-black opacity-20  w-[75.55rem]"></div>
      <h1 className=" text-6xl  font-display absolute right-[40rem] mt-[6rem]">
        SEARCH ON POLYSCAN{" "}
      </h1>

      <input
        type="text"
        placeholder="Txn ID / Document ID / Contract Address ..."
        className=" py-2 px-[5rem] border-2 border-black bg-white text-black text-2xl h-[4rem] w-[60rem]  font-display absolute right-[25.5rem] mt-[12rem] rounded-full "
      ></input>
      <FaSearch className="  h-5 w-5 absolute right-[29rem]  mt-[13.5rem] text-black cursor-pointer hover:h-[1.5rem] hover:w-[1.5rem] duration-100" /> */}
    </>
  );
};

export default Search;
