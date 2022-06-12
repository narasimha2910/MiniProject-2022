import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "../pages/Search";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Dashboard from "../pages/Dashboard";
import Upload from "../pages/Upload";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import getRecordsOfOwner from "../web3/getRecordsOfOwner";
import { Rings } from "react-loader-spinner";

function App() {
  const [active, setActive] = useState(1);
  const [address, setAddress] = useState(null);
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!address) connectToWallet();
    if (address)
      (() => {
        setLoading(true);
        getRecordsOfOwner(address).then((doc) => {
          setDocs(doc.documents);
          console.log(doc);
          setLoading(false);
        });
      })();
  }, [address]);

  const connectToWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts[0]);
        setAddress(accounts[0]);
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <>
      {loading ? (
        <div className="w-full h-[88.5vh] flex justify-center items-center">
          <Rings height="300" width="300" color="#49464B" ariaLabel="loading" />
        </div>
      ) : (
        <Router>
          <div className=" bg-opacity-20 bg-blockchain bg-cover w-screen h-screen">
            <NavBar
              active={active}
              setActive={setActive}
              setAddress={setAddress}
              address={address}
              connectToWallet={connectToWallet}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    setActive={setActive}
                    address={address}
                    connectToWallet={connectToWallet}
                  />
                }
              />
              <Route
                path="/search"
                exact
                element={
                  <Search
                    setActive={setActive}
                    address={address}
                    connectToWallet={connectToWallet}
                  />
                }
              />
              <Route
                path="/dashboard"
                exact
                element={
                  <Dashboard
                    setActive={setActive}
                    address={address}
                    connectToWallet={connectToWallet}
                    docs={docs}
                  />
                }
              />
              <Route
                path="/upload"
                exact
                element={
                  <Upload
                    setActive={setActive}
                    address={address}
                    connectToWallet={connectToWallet}
                  />
                }
              />
            </Routes>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
