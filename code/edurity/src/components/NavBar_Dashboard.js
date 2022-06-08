import EdurityLogo from "../assets/logos/edurity_logo.svg";
const NavBar_Dashboard = () => {
  return (
    <div className="h-20 bg-white shadow-md flex flex-row justify-between ">
      {/* Logo */}
      <div className="w-1/3 cursor-pointer">
        <img src={EdurityLogo} alt="Edurity Logo" className="h-full" />
      </div>
      {/* Nav Links */}
      {/* Connect Wallet Button */}
      <div className="w-2/3 flex flex-row justify-between items-center">
        <div className="flex flex-row justify-between items-center h-full w-2/3 pl-24 text-lg">
          <p className="font-light cursor-pointer hover:text-xl duration-200">
            About Us
          </p>
          <p className="font-medium border-b-2 border-b-black cursor-pointer hover:text-xl duration-200">
            Dashboard
          </p>
          <p className="font-light cursor-pointer hover:text-xl duration-200">
            Upload
          </p>
          <p className="font-light cursor-pointer hover:text-xl duration-200">
            Search
          </p>
        </div>
        <div className="w-1/3 flex flex-row justify-center">
          <button className="bg-black text-white p-3 font-medium rounded-full hover:text-xl duration-200 text-lg">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar_Dashboard;
