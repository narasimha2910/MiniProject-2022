import { HiLink } from "react-icons/hi";
import { BsEyeFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import verifyRecord from "../web3/verifyRecord";

const shortenTxnHash = (address) => {
  return (
    address.slice(0, 5) +
    "..." +
    address.slice(address.length - 5, address.length)
  );
};

const RecordData = ({ owner, status, docId, recView, metaUrl }) => {
  return (
    <div className="flex flex-row justify-between items-center text-center text-lg bg-white py-2 border-[1px] text-gray-700 border-gray-300 mt-4 w-full">
      <p className="w-1/3 pr-8">{docId}</p>
      <p className="w-1/3">{shortenTxnHash(owner)}</p>
      <div className="flex flex-row items-center justify-between w-1/3 pl-24 pr-20 text-2xl text-gray-700">
        <a
          className="cursor-pointer"
          href={metaUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiLink />
        </a>
        <a
          className="cursor-pointer"
          href={recView}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsEyeFill />
        </a>
        <div
          className="cursor-pointer"
          onClick={async () => {
            await verifyRecord(docId, 1);
          }}
        >
          <TiTick />
        </div>
        <div
          className="cursor-pointer text-lg"
          onClick={async () => {
            await verifyRecord(docId, 2);
          }}
        >
          <ImCross />
        </div>
      </div>
    </div>
  );
};

export default RecordData;
