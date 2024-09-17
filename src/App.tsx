import React from "react";
import { Routes, Route } from "react-router-dom";
import Favorites from "./Components/Favorites";
import Navigationbar from "./Components/Navigationbar";
import Searchbar from "./Components/Searchbar";
import Home from "./Components/Home";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Searchbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
