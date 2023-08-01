import React from "react";
import Title from "./Title";
import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";

function About() {
  return (
    <div>
      <Title title="About " />
      <div className="bg-[#DFD7BF] mx-10 shadow-2xl rounded-lg px-5 py-8 flex items-center flex-col sm:justify-evenly sm:flex-row flex-wrap ">
        <div className="lg:w-3/7">
          <div className="h-60 w-60 relative rounded-3xl my-5 ">
            <Image src="/Rolly.jpg" layout="fill" className="rounded-3xl" />
          </div>
        </div>

        <div className="lg:w-[60vh]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, fuga
            reprehenderit. Sapiente harum, soluta commodi natus ab corporis a!
            Inventore fuga hic neque voluptatem minima fugiat adipisci quas at,
            iusto voluptates magni corporis impedit rem assumenda provident
            accusantium harum maiores.
          </p>
          <div className="flex flex-col mt-4">
            <div className="my-2 ">
              <span>Age :</span>
              <span> 23</span>
            </div>
            <div className="my-2 ">
              <span>Email :</span>
              <span> mungureroland@gmail.com</span>
            </div>
            <div className="my-2 ">
              <span>Phone :</span>
              <span> +263 776 686 885</span>
            </div>
            <div className="my-2 ">
              <span>Degree :</span>
              <span> Bsc in Information Technology</span>
            </div>
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
          <div className="flex items-center justify-around my-5">
            <Link
              href="./"
              className="bg-[#3f2305] text-[#fff] py-2 px-3 rounded-md hover:bg-[#F5F5F5] border-4 border-[#3f2305] hover:text-[#3f2305] duration-700 ease-in-out"
            >
              Download Resume
            </Link>
            <Link
              href="./"
              className="hover:bg-[#3f2305] hover:text-[#fff] py-2 px-3 rounded-md bg-[#F5F5F5] border-4 border-[#3f2305] text-[#3f2305] duration-700 ease-in-out"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
