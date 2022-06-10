import EdurityLogo from "../assets/logos/edurity_logo.svg";
import { Link } from "react-router-dom";
import { TbWallet } from "react-icons/tb";

const NavBar = ({ active, setActive, address, connectToWallet }) => {
  
  const shortenWalletAddres = (address) => {
    return (
      address.slice(0, 5) +
      "..." +
      address.slice(address.length - 5, address.length)
    );
  };
  return (
    <div className="h-20 bg-white shadow-md flex flex-row justify-between ">
      {/* Logo */}
      <div className="w-1/3 cursor-pointer">
        <Link to={"/"}>
          <img
            src={EdurityLogo}
            alt="Edurity Logo"
            className="h-full"
            onClick={() => setActive(1)}
          />
        </Link>
      </div>
      {/* Nav Links */}
      {/* Connect Wallet Button */}
      <div className="w-2/3 flex flex-row justify-between items-center">
        <div className="flex flex-row justify-between items-center h-full w-2/3 pl-24 text-lg">
          <Link to="/">
            <p
              className={`${
                active === 1
                  ? "font-medium border-b-2 border-b-black"
                  : "font-light"
              } cursor-pointer hover:mb-3 hover:duration-300`}
              onClick={() => setActive(1)}
            >
              About Us
            </p>
          </Link>
          <Link to={"/dashboard"}>
            <p
              className={`${
                active === 2
                  ? "font-medium border-b-2 border-b-black"
                  : "font-light"
              } cursor-pointer hover:mb-3 duration-300`}
              onClick={() => setActive(2)}
            >
              Dashboard
            </p>
          </Link>
          <Link to={"/upload"}>
            <p
              className={`${
                active === 3
                  ? "font-medium border-b-2 border-b-black"
                  : "font-light"
              } cursor-pointer hover:mb-3 duration-300`}
              onClick={() => setActive(3)}
            >
              Upload
            </p>
          </Link>
          <Link to={"/search"}>
            <p
              className={`${
                active === 4
                  ? "font-medium border-b-2 border-b-black"
                  : "font-light"
              } cursor-pointer hover:mb-3 duration-300`}
              onClick={() => setActive(4)}
            >
              Search
            </p>
          </Link>
        </div>
        <div className="w-1/3 flex flex-row justify-center">
          {address ? (
            <div className="flex flex-row items-center">
              <TbWallet className="text-2xl mr-2" />
              <p className="font-medium">{shortenWalletAddres(address)}</p>
            </div>
          ) : (
            <button
              className="bg-black text-white p-3 font-medium rounded-full hover:text-xl duration-300 text-lg"
              onClick={connectToWallet}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
