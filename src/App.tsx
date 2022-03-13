import React from "react";
import "./index.css";

import Navbar from "./components/Navbar/Navbar";
import Background from "./assets/background.jpg";

const App: React.FC = () => {
  return (
    <div className='text-center'>
      <img alt='background' className='background z-0' src={Background} />
      <div className='w-10/12 bg-gray-300 z-10 rounded-full'>
        <Navbar />
      </div>
    </div>
  );
};

export default App;
