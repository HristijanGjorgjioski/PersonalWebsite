import React from "react";
import "./App.sass";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <div className='main-container'>
      <div className='w-10/12 bg-gray-300 z-10 rounded-full'>
        <Navbar />
      </div>
    </div>
  );
};

export default App;
