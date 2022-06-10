import RecordData from "./RecordData";
const records = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 23, 44, 55, 66, 77, 88, 99, 109, 99,
];

const TableDashboard = () => {
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
        {records.map((rec) => (
          <RecordData
            docId={1}
            docName={"SSLC Marks Card"}
            status={"VERIFIED"}
            txnHash={"0x12345678..."}
            isDelete={true}
          />
        ))}
      </div>
    </div>
  );
};

export default TableDashboard;
