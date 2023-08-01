import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div>
      <Title title="Contact" />
      <div className="bg-[#F2EAD3] mx-8 rounded-lg shadow-2xl">
        <form action="">
          <div className="flex flex-col flex-wrap px-1  py-8 justify-center items-center lg:flex-row lg:justify-between lg:mx-10">
            <div className="flex-col flex">
              <input
                type="text"
                name=""
                id=""
                placeholder="Name"
                className="my-2 w-6/7 px-3 py-2 rounded-lg bg-[#3F2305] text-[#F5F5F5] placeholder:text-[#fff]"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Surname"
                className="my-2 w-6/7 px-3 py-2 rounded-lg bg-[#3F2305] text-[#F5F5F5] placeholder:text-[#fff]"
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                className="my-2 w-6/7 px-3 py-2 rounded-lg bg-[#3F2305] text-[#F5F5F5] placeholder:text-[#fff]"
              />
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Body"
              className="my-2 h-60 w-6/7 px-3 py-2 rounded-lg bg-[#3F2305] text-[#F5F5F5] placeholder:text-[#fff]"
            />
            <input
              type="submit"
              value="Submit"
              className="py-3 px-5 rounded-2xl bg-[#F5F5F5] border-[#3f2305] border-4 my-5"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
