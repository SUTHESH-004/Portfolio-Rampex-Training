import React from "react";
const Navbar = () => {
  return (
    <div className="h-[7vh] w-[100vw]  bg-blue-700 flex flex-row">
      <div className="h-[100%] w-[30vw] bg-pink-500 flex">
        <div className="flex-[3] bg-yellow-500 flex items-center justify-center">
          Suthesh Pravin{" "}
        </div>
      </div>
      <div className="h-[100%] w-[70vw] bg-red-600 flex ">
        <div className="flex-[1] bg-yellow-50 flex items-center justify-center">
          Home
        </div>
        <div className="flex-[1] bg-white/65 flex items-center justify-center">
          Projects
        </div>
        <div className="flex-[1] bg-pink-500 flex items-center justify-center">
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
