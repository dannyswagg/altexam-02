import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-[#c19167] items-center flex justify-center w-full h-16">
        <Link to="https://github.com/dannyswagg" target="_blank">
          <h1 className="flex justify-center items-center bottom-0">
            Developer: @dannyswagg
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Footer;
