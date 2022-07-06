import { useEffect } from "react";
import RecordData from "../components/RecordData";

const statusEnum = {
  0: "PENDING",
  1: "VERIFIED",
  2: "REJECTED",
};

const Home = ({ docs }) => {
  useEffect(() => {
    console.log(docs);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-screen h-[88.5vh]">
      <div className="flex flex-row justify-around bg-gray-200 py-2 text-lg font-medium text-gray-600 mt-4 w-[90vw]">
        <p className="w-1/3 flex justify-center pr-5">DOC ID</p>
        <p className="w-1/3 flex justify-center">OWNER</p>
        <p className="w-1/3 flex justify-center pl-5">ACTIONS</p>
      </div>
      <div className="w-[90vw]">
        {docs &&
          docs.map((doc) => (
            <RecordData
              docId={doc.docId}
              metaUrl={doc.metaUri}
              recView={doc.metaData.image}
              owner={doc.owner}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
