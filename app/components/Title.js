import React from "react";

function Title(props) {
  return (
    <div className="flex items-center justify-center my-20">
      <div className="h-10 w-10 bg-[#3f2305] rounded-tl-full rounded-br-full"></div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#3f2305]">
        {props.title}
      </h1>
      <div className="h-10 w-10 bg-[#3f2305] rounded-tl-full rounded-br-full"></div>
    </div>
  );
}

export default Title;
