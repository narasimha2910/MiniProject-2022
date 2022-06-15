import TableDashboard from "../components/TableDashboard";
import React, { useState } from "react";
import { useEffect } from "react";
import getRecordsOfOwner from "../web3/getRecordsOfOwner";
import RecordData from "../components/RecordData";
import { useQuery } from "react-query";

const Dashboard = ({ setActive, connectToWallet, address, docs }) => {
  const [docus, setDocus] = useState([]);
  // let docus = [{}];
  const statusEnum = {
    0: "PENDING",
    1: "VERIFIED",
    2: "REJECTED",
  };
  useEffect(() => {
    setActive(2);
    if (!address) connectToWallet();
    console.log("Dashboard Rerender");
    console.log(docs);
    setDocus(docs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, connectToWallet, docs]);

  // const { isLoading, isError, data } = useQuery(
  //   "get-recs",
  //   () => getRecordsOfOwner("0xe56f2f356462ee1338fbca57ef56e0a024bd6499"),
  //   { refetchOnMount: "always" }
  // );

  // if (isLoading) return <p>LOADING... </p>;

  // if (data) {
  //   // setDocus(data.documents);
  //   console.log(data);
  //   // data.documents.forEach((doc) => console.log(doc));
  //   // for (const idx in data) {
  //   //   console.log(data[idx]);
  //   //   docus.push(data[idx]);
  //   //   console.log(docus);
  //   // }
  // }

  return (
    <div className="w-screen">
      <div className="mt-2 text-white flex justify-center items-center">
        <button
          onClick={() => {
            window.location.reload();
            window.location.href = "/";
          }}
          className="bg-black p-1 rounded-md"
        >
          Reload
        </button>
      </div>
      {docus && (
        <div className="font-display flex flex-col justify-start">
          {/* Headings */}
          <div className="flex flex-row justify-around bg-gray-200 py-2 text-lg font-medium text-gray-600 mt-4">
            <p>NAME</p>
            <p>TRANSACTION HASH</p>
            <p>STATUS</p>
            <p>ACTIONS</p>
          </div>
          {/* Records */}
          <div className="overflow-y-scroll h-[75vh] mt-5">
            {docus &&
              docus.map((rec) => (
                <RecordData
                  key={rec.docId}
                  docId={rec.docId}
                  docName={rec.metaData.name}
                  status={statusEnum[rec.status]}
                  txnHash={rec.txnHash}
                  recView={rec.metaData.image}
                  isDelete={true}
                />
              ))}
          </div>
        </div>
      )}
      {/* {docus && docus.map((doc, idx) => <p key={idx}>{doc.status}</p>)} */}
    </div>
  );
};

export default Dashboard;
