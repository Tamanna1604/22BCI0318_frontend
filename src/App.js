import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Home searchTerm={searchTerm} />
    </>
  );
}

export default App;
