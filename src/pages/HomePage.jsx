import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import { IoLogoReact } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
const HomePage = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-white">
        <Navbar />
        <div className=" flex flex-row h-[93vh] w-[100vw] bg-white gap-4 pl-4 pr-4">
          <div className="h-[80%] my-auto w-[40%]  bg-white shadow-2xl border flex justify-center items-center">
            <img src={assets.dummyprofile} alt="" />
          </div>
          <div className="h-[80%] my-auto w-[60%]  bg-white shadow-2xl border flex flex-col justify-center items-center gap-12">
            <div className="font-bold text-6xl text-center pt-4">
              I am Suthesh Pravin
            </div>
            <div className="bg-yellow-500 p-4 pt-2 pb-2">
              {" "}
              Who like build web applications{" "}
            </div>
            <div className=" h-[300px] w-[80%] grid grid-cols-3 justify-center items-center">
              <div className=" h-[100px] w-[70%] bg-white">
                <IoLogoReact
                  className="mx-auto my-auto"
                  size={"100px"}
                  color="blue"
                />
                <p className="text-center">React</p>
              </div>
              <div className=" h-[100px] w-[70%]">
                <SiExpress
                  className="mx-auto my-auto"
                  size={"100px"}
                  color="green"
                />
                <p className="text-center">Express js</p>
              </div>
              <div className=" h-[100px] w-[70%]">
                <SiMongodb
                  className="mx-auto my-auto"
                  size={"100px"}
                  color="green"
                />
                <p className=" pt-1 text-center">Mongo DB</p>
              </div>
              <div className=" h-[100px] w-[70%]">
                <FaNode
                  className="mx-auto my-auto"
                  size={"100px"}
                  color="green"
                />
                <p className=" text-center">Node js </p>
              </div>
              <div className=" h-[100px] w-[70%]">
                <FaJava
                  className="mx-auto my-auto"
                  size={"100px"}
                  color="green"
                />
                <p className=" pt-2 text-center">JAVA </p>
              </div>
              <div className=" h-[100px] w-[70%]">
                <GrMysql
                  className="mx-auto my-auto"
                  size={"100px"}
                  color="green"
                />
                <p className="pt-1 text-center">MY SQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
