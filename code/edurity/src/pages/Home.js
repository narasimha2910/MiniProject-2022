import PolygonLogo from "../assets/logos/poly.svg";
import { BsGithub } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdOutlineBuildCircle } from "react-icons/md";
import { useEffect } from "react";

const Home = ({ setActive }) => {
  useEffect(() => {
    setActive(1);
  }, [setActive]);
  return (
    <>
      <div className="font-display container mx-auto flex flex-row items-center h-[88.5vh] justify-between">
        <div className="w-1/2 px-5 text-left">
          <h1 className="text-8xl font-light mb-8">EDURITY AIMS TOWARDS</h1>
          <p className="text-xl font-light ml-4 w-2/3">
            the best experience for our users by providing a flawless
            architecture to keep up with the security standards of document
            uploads.
          </p>
        </div>
        <div className="h-full w-36 bg-black mr-2 opacity-75 flex flex-col justify-around items-center py-14">
          <BsGithub className="w-12 h-12 text-white cursor-pointer hover:h-14 hover:w-14 duration-100" />
          <HiMail className="w-12 h-12 text-white cursor-pointer hover:h-14 hover:w-14 duration-100" />
          <MdOutlineBuildCircle className="w-12 h-12 text-white cursor-pointer hover:h-14 hover:w-14 duration-100" />
        </div>
      </div>
      <div className="bottom-0 fixed flex justify-center w-screen font-display ">
        <p className="text-xs fixed bottom-20 mr-20 text-gray-600">
          powered by
        </p>
        <img src={PolygonLogo} alt="Polygon Logo" className="w-32 h-32 p-0" />
      </div>
    </>
  );
};

export default Home;
