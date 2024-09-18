import React from "react";
import { NavLink } from "react-router-dom";
import { User } from "lucide-react";
const Navbar = () => {
  return (
    <div className="h-[7vh] w-[100vw]  bg-blue-700 flex flex-row">
      <div className="h-[100%] w-[30vw] bg-pink-500 flex">
        <div className="flex-[5] bg-yellow-500 flex items-center justify-center">
          SUTHESH PRAVIN V{" "}
        </div>
      </div>
      <div className="h-[100%] w-[70vw] bg-red-600 flex ">
        <NavLink
          to="/"
          className="flex-[3] bg-yellow-50 flex items-center justify-center"
        >
          HOME
        </NavLink>
        <NavLink
          to="/projects"
          className="flex-[3] bg-white/65 flex items-center justify-center"
        >
          PROJECTS
        </NavLink>
        <NavLink
          to="contact"
          className="flex-[3] bg-pink-500 flex items-center justify-center"
        >
          CONTACT
        </NavLink>
        <div className="flex-[1] bg-blue-500 flex items-center justify-center">
          <User />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
