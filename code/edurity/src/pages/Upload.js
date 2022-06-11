import DocumentUpload from "../assets/logos/upload_logo.svg";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import Select from "react-select";
import { Rings } from "react-loader-spinner";
import mintDocument from "../web3/mintDocument";
import { db } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore";

const client = ipfsHttpClient("https://ipfs.infura.io:5001");

const Upload = ({ setActive, connectToWallet, address }) => {
  useEffect(() => {
    setActive(3);
    if (!address) connectToWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  const fileRef = useRef(null);
  const [name, setName] = useState("");
  const [recType, setRecType] = useState("");
  const [docId, setDocId] = useState("");
  const [chosenFile, setChosenFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadToIpfs = () => {
    console.log(chosenFile);
    let url = "";
    let metaData = "";
    client
      .add(chosenFile, {
        progress: (prog) => console.log(`received: ${prog}`),
      })
      .then((added) => {
        console.log(added.path);
        url = `https://ipfs.infura.io/ipfs/${added.path}`;
      })
      .then(() => {
        const data = JSON.stringify({
          name: name,
          description: {
            ownedBy: name,
            recordType: recType.value,
            recordId: docId,
          },
          image: url,
        });
        client.add(data).then(async (added) => {
          console.log(added.path);
          metaData = `https://ipfs.infura.io/ipfs/${added.path}`;
          console.log(metaData);
          const document = await mintDocument(metaData);
          console.log(document);
          await addDoc(collection(db, "documents"), document);
          setLoading(false);
          setChosenFile(null);
          setDocId(null);
          setRecType(null);
        });
      });
  };

  const options = [
    { value: "sslc", label: "SSLC Marks Card" },
    {
      value: "puc",
      label: "PUC Marks Card",
    },
    { value: "diploma", label: "Diploma Marks Card" },
    {
      value: "be",
      label: "Engineering Marks Card",
    },
  ];

  return (
    <>
      {loading ? (
        <div className="w-full h-[88.5vh] flex justify-center items-center">
          <Rings height="300" width="300" color="#49464B" ariaLabel="loading" />
        </div>
      ) : (
        <div className="h-[88.5vh] relative font-display">
          <div className="h-full w-10 bg-black mr-2 opacity-20 absolute left-60 -z-10"></div>
          <div className="h-full w-10 bg-black mr-2 opacity-20 absolute right-60 -z-10"></div>
          <div className="w-[59.5rem] h-10 bg-black mr-2 opacity-20 absolute top-24 left-60 -z-10"></div>
          <div className="w-full h-full flex flex-col items-center justify-start">
            <div className="bg-white w-32 h-32 border-2 border-black flex items-center justify-center rounded-md my-4">
              <img
                src={DocumentUpload}
                alt="Document Upload"
                className="w-20 h-20"
              />
            </div>
            <input
              type="file"
              accept="image/*,application/pdf"
              ref={fileRef}
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                console.log(file);
                setChosenFile(file);
              }}
            />
            {chosenFile ? (
              <p>{chosenFile.name}</p>
            ) : (
              <button
                className="border-[2px] border-black bg-white text-black rounded-md hover:text-xl duration-100 text-lg py-2 px-6 w-80 my-4"
                onClick={() => {
                  fileRef.current.click();
                }}
              >
                Choose a File..
              </button>
            )}
            <input
              type="text"
              placeholder="Enter Your Name..."
              className="border-2 border-black bg-white text-black text-lg rounded-md py-2 px-6 w-80 focus:outline-none my-4"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <Select
              options={options}
              value={recType}
              onChange={(rec) => setRecType(rec)}
              className="border-2 border-black bg-white text-black text-lg rounded-md py-2 px-6 w-80 focus:outline-none my-4"
            />
            <input
              type="text"
              placeholder="Enter document identifier..."
              className="border-2 border-black bg-white text-black text-lg rounded-md py-2 px-6 w-80 focus:outline-none my-4"
              onChange={(e) => setDocId(e.target.value)}
            ></input>
            <button
              className="bg-black text-white rounded-md hover:text-xl duration-100 text-lg py-2 px-6 w-80 flex justify-around items-center my-4"
              onClick={() => {
                uploadToIpfs();
                setLoading(true);
              }}
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Upload;
