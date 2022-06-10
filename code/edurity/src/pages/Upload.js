import DocumentUpload from "../assets/logos/upload_logo.svg";
import React from "react";
import { useEffect } from "react";

const Upload = ({ setActive }) => {
  useEffect(() => {
    setActive(3);
  }, [setActive]);

  return (
    <>
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
          <button className="border-[2px] border-black bg-white text-black rounded-md hover:text-xl duration-100 text-lg py-2 px-6 w-80 my-4">
            Choose a File..
          </button>
          <input
            type="text"
            placeholder="Enter document Name..."
            className="border-2 border-black bg-white text-black text-lg rounded-md py-2 px-6 w-80 focus:outline-none my-4"
          ></input>
          <select className="border-2 border-black bg-white text-black text-lg rounded-md py-2 px-2 w-80 focus:outline-none my-4">
            <option value="">SSLC Marks Card</option>
            <option value="">PUC Marks Card</option>
            <option value="">Diploma Marks Card</option>
            <option value="">UG Marks Card</option>
          </select>
          <input
            type="text"
            placeholder="Enter document identifier..."
            className="border-2 border-black bg-white text-black text-lg rounded-md py-2 px-6 w-80 focus:outline-none my-4"
          ></input>
          <button className="bg-black text-white rounded-md hover:text-xl duration-100 text-lg py-2 px-6 w-80 flex justify-around items-center my-4">
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default Upload;
