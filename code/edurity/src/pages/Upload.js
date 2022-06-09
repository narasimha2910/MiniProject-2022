import Document_Upload from "../assets/logos/upload_logo.svg";
import React from "react";
import { useEffect } from "react";



const Upload = ({ setActive }) => {
  useEffect(() => {
    setActive(3);
  }, [setActive]);

  return (
    <>
    
   
    <div className="   h-full w-10 bg-black mr-2 opacity-20 absolute left-60">
</div>
<div className="   h-full w-10 bg-black mr-2 opacity-20 absolute right-60">
</div>

<div className=" absolute left-[17.5rem] mt-[13rem] h-10  bg-black opacity-20  w-[75.55rem]"></div>

<div className="  border-2 border-black h-[23rem] w-[30rem] bg-white  absolute right-[40rem] mt-[4rem] rounded-2xl ">
 </div>
 <img src={Document_Upload} alt="Document_Upload" className="h-[11rem] w-[11rem] absolute right-[49rem] mt-[6rem]"  />
 <button  className=" border-2 border-black bg-white text-black text-lg h-[3rem] w-[20rem]  font-display absolute right-[45rem] mt-[20rem] rounded-full  hover:text-xl duration-100 text-lg">Choose a File..</button>
 <input type="text" placeholder="Enter document Name..." className=" py-2 px-[9rem] border-2 border-black bg-white text-black text-xl h-[4rem] w-[30rem]  font-display absolute right-[40rem] mt-[30rem] rounded-full "></input>
 <button id="dropdownDefault" data-dropdown-toggle="dropdown" className=" py-2 px-7 border-2 border-black bg-white text-slate-400 text-xl h-[4rem] w-[30rem]  font-display absolute right-[40rem] mt-[35rem] rounded-full ">Select Type Of Document...</button>
 <input type="text" placeholder="Enter document identifier..." className=" py-2 px-[9rem] border-2 border-black bg-white text-black text-xl h-[4rem] w-[30rem]  font-display absolute right-[40rem] mt-[40rem] rounded-full "></input>
 <button className=" border-2 border-black bg-black text-white text-2xl h-[3rem] w-[15rem]  font-display absolute right-[48rem] mt-[46rem] rounded-full  hover:text-xl duration-100 text-lg">Upload</button>

 







</>



  );
};

export default Upload;
