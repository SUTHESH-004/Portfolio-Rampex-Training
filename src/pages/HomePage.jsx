import React from "react";
import Navbar from "../components/Navbar";
const HomePage = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-black">
        <Navbar />
        <div className=" flex flex-row h-[93vh] w-[100vw] bg-green-500 gap-4">
          <div className="h-[80%] my-auto w-[40%]  bg-blue-500"></div>
          <div className="h-[80%] my-auto w-[60%]  bg-black"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
