import EdurityLogo from "../assets/logos/edurity_logo.svg";
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
        <img
          src={EdurityLogo}
          alt="Edurity Logo"
          className="h-full"
          onClick={() => setActive(1)}
        />
      </div>
      <div className="text-4xl flex items-center">Verifiers Dashboard</div>
      {/* Nav Links */}
      {/* Connect Wallet Button */}
      <div className="w-1/3 flex flex-row justify-end mr-5 items-center">
        {address ? (
          <div className="flex flex-row items-center">
            <TbWallet className="text-2xl mr-2" />
            <p className="font-medium">{shortenWalletAddres(address)}</p>
          </div>
        ) : (
          <button
            className="bg-black text-white px-4 rounded-full duration-300 text-2xl h-16"
            onClick={connectToWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
