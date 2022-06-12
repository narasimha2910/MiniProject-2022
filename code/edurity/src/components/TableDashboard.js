import { useEffect } from "react";
import RecordData from "./RecordData";

const statusEnum = {
  0: "PENDING",
  1: "VERIFIED",
  2: "REJECTED",
};

const TableDashboard = ({ docus, forceUpdate }) => {
  useEffect(() => {
    forceUpdate();
    console.log("Table rerender");
  }, [forceUpdate, docus]);
  return (
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
        {docus.map((rec) => (
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
  );
};

export default TableDashboard;
