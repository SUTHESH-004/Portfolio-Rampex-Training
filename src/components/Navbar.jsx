import React from "react";
import { NavLink } from "react-router-dom";
import { User } from "lucide-react";
const Navbar = () => {
  return (
    <div className="h-[7vh] w-[100vw]  bg-black/90 flex flex-row gap-5 text-white tracking-[0.25rem]">
      <div className="h-[100%] w-[30vw] flex">
        <div className="flex-[5] flex items-center justify-center  hover:text-black hover:bg-white">
          SUTHESH PRAVIN V{" "}
        </div>
      </div>
      <div className="h-[100%] w-[70vw] flex gap-5 ">
        <NavLink
          to="/"
          className="flex-[3] flex items-center justify-center rounded-2xl  hover:text-black hover:bg-white"
        >
          HOME
        </NavLink>
        <NavLink
          to="/projects"
          className="flex-[3] flex items-center justify-center rounded-2xl  hover:text-black hover:bg-white"
        >
          PROJECTS
        </NavLink>
        <NavLink
          to="contact"
          className="flex-[3] flex items-center justify-center rounded-2xl  hover:text-black hover:bg-white"
        >
          CONTACT
        </NavLink>
        <div className="flex-[1] flex items-center justify-center rounded-2xl  hover:text-black hover:bg-white">
          <User />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
