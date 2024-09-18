import React from "react";
import Navbar from "../components/Navbar";
const HomePage = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-black">
        <Navbar />
        <div className="h-[93vh] w-[100vw] bg-green-500"></div>
      </div>
    </>
  );
};

export default HomePage;
