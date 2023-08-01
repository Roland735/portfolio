"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMoon, FaX } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [Nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!Nav);
  };

  return (
    <div className="">
      <div className=" fixed flex justify-between   w-full bg-[#3F2305] items-center text-[#fff] overflow-hidden z-50">
        <div className="relative">
          <Image
            src="/logoimage.png"
            width={110}
            height={110}
            alt="Picture of the author"
          />
        </div>
        <div className="sm:hidden text-3xl mx-10">
          <FaBars onClick={handleNav} />
        </div>
        <motion.ul
          className="hidden sm:flex justify-evenly w-5/12 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.9, ease: "easeInOut" }}
        >
          <li>
            <Link href={"./"}>Home</Link>
          </li>
          <li>
            <Link href={"./"}>Skills</Link>
          </li>
          <li>
            <Link href={"./"}>Projects</Link>
          </li>
          <li>
            <Link href={"./"}>About Me</Link>
          </li>
        </motion.ul>

        <motion.div
          className="hidden sm:flex w-2/12 justify-evenly"
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.9, ease: "easeInOut" }}
        >
          <button className="bg-[#fff] py-1 px-3 text-lg text-[#3F2305] rounded-md mx-2">
            Contact
          </button>
          <div className="bg-[#fff] text-lg text-[#3F2305] rounded-md mx-2 grid place-items-center p-3">
            <FaMoon />
          </div>
        </motion.div>
      </div>
      <motion.ul
        className={
          Nav
            ? ` bg-[#3f2305] h-screen fixed z-50 w-screen flex flex-col justify-evenly items-center text-[#fff]`
            : `hidden`
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.9, ease: "easeInOut" }}
      >
        <div className="sm:hidden text-3xl mx-10 ">
          <FaX onClick={handleNav} />
        </div>
        <li>
          <Link href={"./"}>Home</Link>
        </li>
        <li>
          <Link href={"./"}>Skills</Link>
        </li>
        <li>
          <Link href={"./"}>Projects</Link>
        </li>
        <li>
          <Link href={"./"}>About Me</Link>
        </li>
      </motion.ul>
    </div>
  );
}

export default Navbar;
