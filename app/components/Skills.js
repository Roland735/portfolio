"use client";
import { React, useState } from "react";
import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGit,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaMobile,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaToolbox,
  FaWordpress,
} from "react-icons/fa6";
import { motion } from "framer-motion";

function Skills() {
  const [Front, setFront] = useState(true);
  const [Back, setBack] = useState(false);
  const [Tech, setTech] = useState(false);
  const handleFront = () => {
    setFront(true);
    setBack(false);
    setTech(false);
    console.log("ffff");
  };
  const handleBack = () => {
    setFront(false);
    setBack(true);
    setTech(false);
    console.log("bbbbb");
  };
  const handleTech = () => {
    setFront(false);
    setBack(false);
    setTech(true);
    console.log("ttttt");
  };
  return (
    <div className="">
      <div className="flex items-center justify-center my-20">
        <div className="h-10 w-10 bg-[#3f2305] rounded-tl-full rounded-br-full"></div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#3f2305]">
          Skills
        </h1>
        <div className="h-10 w-10 bg-[#3f2305] rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="">
        <div className="flex justify-around my-10 mx-1 text-lg font-light sm:text-4xl lg:text-4xl xl:text-3xl 2xl:text-5xl bg-[#F5F5F5]">
          <div
            className={Front ? `border-b-4 border-[#352305]` : ``}
            onClick={handleFront}
          >
            Frontend
          </div>
          <div
            className={Back ? `border-b-4 border-[#352305]` : ``}
            onClick={handleBack}
          >
            Backend
          </div>
          <div
            className={Tech ? `border-b-4 border-[#352305]` : ``}
            onClick={handleTech}
          >
            None Technical
          </div>
        </div>

        <div
          className={
            Front
              ? `bg-[#F5F5F5] mx-5 flex flex-col justify-between text-xl sm:flex-row flex-wrap`
              : `hidden`
          }
        >
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-3/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl items-center">
            <div className="mr-4">
              <FaHtml5 />
            </div>
            <div className="">Html</div>
          </div>
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl">
            <div className="mr-4">
              <FaJs />
            </div>
            <div className="">JavaScript</div>
          </div>
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl">
            <div className="mr-4">
              <FaCss3 />
            </div>
            <div className="">Css</div>
          </div>
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl">
            <div className="mr-4">
              <FaReact />
            </div>
            <div className="">React Js</div>
          </div>
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl">
            <div className="mr-4">
              <FaFigma />
            </div>
            <div className="">Figma</div>
          </div>
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl">
            <div className="mr-4">
              <FaBootstrap />
            </div>
            <div className="">Reactjs</div>
          </div>
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl">
            <div className="mr-4">
              <FaBootstrap />
            </div>
            <div className="">Bootstrap</div>
          </div>
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl">
            <div className="mr-4">
              <FaWordpress />
            </div>
            <div className="">Wordpress</div>
          </div>
        </div>

        <div
          className={
            Back
              ? `bg-[#F5F5F5] mx-5 flex flex-col justify-between text-xl sm:flex-row flex-wrap`
              : `hidden`
          }
        >
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl items-center">
            <div className="mr-4">
              <FaPhp />
            </div>
            <div className="">PHP</div>
          </div>
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl items-center">
            <div className="mr-4">
              <FaPython />
            </div>
            <div className="">Python</div>
          </div>
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl">
            <div className="mr-4">
              <FaNodeJs />
            </div>
            <div className="">Node Js</div>
          </div>
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl">
            <div className="mr-4">
              <FaLaravel />
            </div>
            <div className="">Laravel</div>
          </div>
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl">
            <div className="mr-4">
              <FaToolbox />
            </div>
            <div className="">Web Servers</div>
          </div>
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl">
            <div className="mr-4">
              <FaLaravel />
            </div>
            <div className="">MongoDb</div>
          </div>
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl">
            <div className="mr-4">
              <FaLaravel />
            </div>
            <div className="">MySql</div>
          </div>
        </div>

        <div
          className={
            Tech
              ? `bg-[#F5F5F5] mx-5 flex flex-col justify-between text-xl sm:flex-row flex-wrap`
              : `hidden`
          }
        >
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl items-center">
            <div className="mr-4">
              <FaToolbox />
            </div>
            <div className="">Agile</div>
          </div>
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl">
            <div className="mr-4">
              <FaToolbox />
            </div>
            <div className="">Scrum</div>
          </div>
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl">
            <div className="mr-4">
              <FaGit />
            </div>
            <div className="">Git</div>
          </div>
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl">
            <div className="mr-4">
              <FaToolbox />
            </div>
            <div className="">Api</div>
          </div>
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl">
            <div className="mr-4">
              <FaToolbox />
            </div>
            <div className="">Api</div>
          </div>
          <div className="flex bg-[#DFD7BF] mx-5 sm:w-7/7 sm:mx-10 sm:my-5 sm:py-10 sm:px-10 my-3 sm:rounded-md justify-between p-4 rounded-sm shadow-xl">
            <div className="mr-4">
              <FaToolbox />
            </div>
            <div className="">Apikfrkjfjfj</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
