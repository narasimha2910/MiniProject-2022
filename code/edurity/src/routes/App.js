import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "../pages/Search";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import Dashboard from "../pages/Dashboard";
import Upload from "../pages/Upload";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const [active, setActive] = useState(1);
  const [address, setAddress] = useState(null);
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
  );
}

export default App;
