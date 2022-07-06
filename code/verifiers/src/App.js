import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import getAllRecords from "./web3/getAllRecords";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rings } from "react-loader-spinner";

function App() {
  const [docus, setDocus] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAllRecords().then((docs) => {
      console.log(docs.documents);
      setDocus(docs.documents);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-full h-[88.5vh] flex justify-center items-center">
          <Rings height="300" width="300" color="#49464B" ariaLabel="loading" />
        </div>
      ) : (
        <div className="font-display bg-blockchain bg-cover w-screen h-screen">
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" exact element={<Welcome />} />
              <Route path="/docs" element={<Home docs={docus} />} />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
