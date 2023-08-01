import Image from "next/image";
import Link from "next/link";
import React from "react";
import Title from "./Title";

function Projects() {
  return (
    <div className="flex justify-center items-center flex-col px-5">
      <Title title="Projects" />
      <div className="flex-col flex justify-between items-center sm:flex-row sm:justify-around flex-wrap sm:w-full sm:items-center">
        <div className="flex flex-col justify-center items-center my-10 bg-[#DFD7BF] px-5 py-5 rounded-md lg:max-w-3xl">
          <h2 className="text-xl my-5 sm:text-2xl border-b-4 border-[#3f2305]">
            Car Rental
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row sm:justify-around sm:items-center sm:flex">
            <div className="relative sm:h-48 sm:w-48 h-40 w-40 rounded-lg sm:w-3/7">
              <Image
                src="/CarRental.jpg"
                layout="fill"
                className="rounded-lg"
              />
            </div>
            <div className="sm:w-3/6">
              <p className="text-sm pt-3 sm:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                optio qui, temporibus harum nulla ipsam vel ex laboriosam velit,
                odit ita
              </p>
              <div className="flex items-center justify-around my-5">
                <Link
                  href="./"
                  className="bg-[#3f2305] text-[#fff] py-2 px-3 rounded-md hover:bg-[#F5F5F5] border-4 border-[#3f2305] hover:text-[#3f2305] duration-700 ease-in-out"
                >
                  Live Demo
                </Link>
                <Link
                  href="./"
                  className="hover:bg-[#3f2305] hover:text-[#fff] py-2 px-3 rounded-md bg-[#F5F5F5] border-4 border-[#3f2305] text-[#3f2305] duration-700 ease-in-out"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-10 bg-[#DFD7BF] px-5 py-5 rounded-md lg:max-w-3xl">
          <h2 className="text-xl my-5 sm:text-2xl border-b-4 border-[#3f2305]">
            Car Rental
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row sm:justify-around sm:items-center sm:flex">
            <div className="relative sm:h-48 sm:w-48 h-40 w-40 rounded-lg sm:w-3/7">
              <Image
                src="/CarRental.jpg"
                layout="fill"
                className="rounded-lg"
              />
            </div>
            <div className="sm:w-3/6">
              <p className="text-sm pt-3 sm:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                optio qui, temporibus harum nulla ipsam vel ex laboriosam velit,
                odit itaque explicabo doloremque ut, officiis consectetur cum
                nostrum quam nihil!
              </p>
              <div className="flex items-center justify-around my-5">
                <Link
                  href="./"
                  className="bg-[#3f2305] text-[#fff] py-2 px-3 rounded-md hover:bg-[#F5F5F5] border-4 border-[#3f2305] hover:text-[#3f2305] duration-700 ease-in-out"
                >
                  Live Demo
                </Link>
                <Link
                  href="./"
                  className="hover:bg-[#3f2305] hover:text-[#fff] py-2 px-3 rounded-md bg-[#F5F5F5] border-4 border-[#3f2305] text-[#3f2305] duration-700 ease-in-out"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
