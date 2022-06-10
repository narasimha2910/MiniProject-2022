import React, { useEffect } from "react";
import { HiLink } from "react-icons/hi";
import { TbTrash } from "react-icons/tb";
import { BsEyeFill } from "react-icons/bs";

const RecordData = ({ docName, txnHash, status, docId, isDelete }) => {
  return (
    <div className="flex flex-row justify-between items-center text-center text-lg bg-white py-2 border-[1px] text-gray-700 border-gray-300 mt-4 w-full">
      <p className="w-1/4 pr-8">{docName}</p>
      <p className="w-1/4">{txnHash}</p>
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
        <p className="cursor-pointer">
          <HiLink />
        </p>
        {isDelete && (
          <p className="cursor-pointer">
            <TbTrash />
          </p>
        )}
        <p className="cursor-pointer">
          <BsEyeFill />
        </p>
      </div>
    </div>
  );
};

export default RecordData;
