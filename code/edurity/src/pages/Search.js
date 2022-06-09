import {FaSearch} from "react-icons/fa";
import React, { useEffect } from "react";

const Search = ({ setActive }) => {
  useEffect(() => {
    setActive(4);
  }, [setActive]);

  return (
    <>
    
   
    <div className="   h-full w-10 bg-black mr-2 opacity-20 absolute left-60">
</div>
<div className="   h-full w-10 bg-black mr-2 opacity-20 absolute right-60">
</div>

<div className=" absolute left-[17.5rem] mt-[13rem] h-10  bg-black opacity-20  w-[75.55rem]"></div>
<h1 className=" text-6xl  font-display absolute right-[40rem] mt-[6rem]">SEARCH ON POLYSCAN  </h1>

 <input type="text" placeholder="Txn ID / Document ID / Contract Address ..." className=" py-2 px-[5rem] border-2 border-black bg-white text-black text-2xl h-[4rem] w-[60rem]  font-display absolute right-[25.5rem] mt-[12rem] rounded-full "></input>
 <FaSearch className="  h-5 w-5 absolute right-[29rem]  mt-[13.5rem] text-black cursor-pointer hover:h-[1.5rem] hover:w-[1.5rem] duration-100" />
 







</>



  );
};

export default Search;
