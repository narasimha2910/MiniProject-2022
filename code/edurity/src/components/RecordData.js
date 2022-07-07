import React, { useEffect } from "react";
import { HiLink } from "react-icons/hi";
import { TbTrash } from "react-icons/tb";
import { BsEyeFill } from "react-icons/bs";

const shortenTxnHash = (address) => {
  return (
    address.slice(0, 5) +
    "..." +
    address.slice(address.length - 5, address.length)
  );
};

const RecordData = ({ docName, txnHash, status, docId, recView, metaUri, owner }) => {
  // useEffect(() => {
  //   console.log("Record");
  // }, []);
  return (
    <div className="flex flex-row justify-between items-center text-center text-lg bg-white py-2 border-[1px] text-gray-700 border-gray-300 mt-4 w-full">
      <p className="w-1/4 pr-8">{docName}</p>
      <p className="w-1/4">{txnHash ? shortenTxnHash(txnHash) : shortenTxnHash(owner)}</p>
      <p className="w-1/4 pl-12 ">
        <span
          className={`${
            status === "VERIFIED"
              ? "bg-green-300"
              : status === "PENDING"
              ? "bg-yellow-300"
              : "bg-red-300"
          } px-4 rounded-full`}
        >
          {status}
        </span>
      </p>
      <div className="flex flex-row items-center justify-between w-1/4 pl-24 pr-20 text-2xl text-gray-700">
        <a
          className="cursor-pointer"
          href={txnHash ? `https://mumbai.polygonscan.com/tx/${txnHash}` : metaUri}
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
      </div>
    </div>
  );
};

export default RecordData;
