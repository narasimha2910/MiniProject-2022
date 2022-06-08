import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "../pages/Search";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import Dashboard from "../pages/Dashboard";
import Upload from "../pages/Upload";

function App() {
  const [active, setActive] = useState(1);
  return (
    <Router>
      <div className=" bg-opacity-20 bg-blockchain bg-cover w-screen h-screen">
        <NavBar active={active} setActive={setActive} />
        <Routes>
          <Route path="/" element={<Home setActive={setActive} />} />
          <Route
            path="/search"
            exact
            element={<Search setActive={setActive} />}
          />
          <Route
            path="/dashboard"
            exact
            element={<Dashboard setActive={setActive} />}
          />
          <Route
            path="/upload"
            exact
            element={<Upload setActive={setActive} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
