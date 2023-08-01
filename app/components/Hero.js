"use client";
import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="w-screen flex bg-[#F5F5F5] min-h-screen items-center flex-col lg:flex-row justify-evenly- lg:pt-20">
      {/* <Pagewraper> */}

      <div className="w-9/12 flex justify-center items-center flex-col mt-48 mb-14 lg:mb-20 lg:mt-0">
        <motion.div
          className="sm:w-[28rem]  sm:h-[28rem] xl:w-[30rem]  xl:h-[30rem] bg-[#f5f5f5] rounded-full absolute xl:top-[19%] 2xl:top-[30%]"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ rotate: 0 }}
        >
          <div className="xl:top-72 sm:top-52 top-32 w-[2rem] h-[2rem] relative bg-[#3f2305] z-0 m-20 rounded-full"></div>
        </motion.div>
        <div className="rounded-full w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 relative ">
          <Image src="/Rolly.jpg" layout="fill" className="rounded-full z-10" />
        </div>
      </div>
      <motion.div
        className="flex-col flex justify-center items-center z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.9, ease: "easeInOut" }}
      >
        <div className="bg-[#3F2305] rounded-tl-xl rounded-br-xl text-[#f5f5f5] mx-4 p-4">
          <h1 className="xl:text-5xl lg:text-5xl sm:text-3xl">
            Hi, my name is <span className="text-[]  ">Roland Mungure</span>
            . <br /> I am a <span>FullStack Developer.</span>
          </h1>
        </div>
        <div className="flex justify-between my-10 ">
          <div className="text-sm sm:text-lg border-color-400 rounded-full p-3 border-2 bg-[#3F2305] text-[#f5f5f5] sm:mx-4 mx-2">
            <FaGithub />
          </div>
          <div className="text-sm sm:text-lg border-color-400 rounded-full p-3 border-2 bg-[#3F2305] text-[#f5f5f5] sm:mx-4 mx-2">
            <FaLinkedin />
          </div>
          <div className="text-sm sm:text-lg border-color-400 rounded-full p-3 border-2 bg-[#3F2305] text-[#f5f5f5] sm:mx-4 mx-2">
            <FaWhatsapp />
          </div>
          <div className="text-sm sm:text-lg border-color-400 rounded-full p-3 border-2 bg-[#3F2305] text-[#f5f5f5] sm:mx-4 mx-2">
            <FaInstagram />
          </div>
          <div className="text-sm sm:text-lg border-color-400 rounded-full p-3 border-2 bg-[#3F2305] text-[#f5f5f5] sm:mx-4 mx-2">
            <FaTwitter />
          </div>
        </div>
      </motion.div>
      {/* </Pagewraper> */}
    </div>
  );
}

export default Hero;
