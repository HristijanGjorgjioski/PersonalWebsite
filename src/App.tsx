import React from "react";

import Navbar from "./components/Navbar/Navbar";

import "./App.styles.sass";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className='main-container'>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
};

export default App;
