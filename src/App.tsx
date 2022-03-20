import React from "react";

import Navbar from "./components/Navbar/Navbar";

import "./App.styles.sass";

const App: React.FC = () => {
  return (
    <div className='main-container'>
      <Navbar />
    </div>
  );
};

export default App;
