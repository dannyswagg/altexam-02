import React from "react";
import bg3 from "../Assests/bg3.jpg";
import ww from "../Assests/ww.png";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className="relative w-full h-full">
        <img
          src={ww}
          alt="Animated Github octocat"
          className="lg:hidden object-cover h-screen w-full"
        />
        <img
          src={bg3}
          alt="Animated Github octocat"
          className="lg:block md:hidden hidden object-cover h-screen w-full"
        />
        <div className="absolute top-5 px-10">
          <h1 className="text-[#c19167] font-bold lg:text-5xl md:3xl text-2xl">
            Error 404 <br /> Page Not Found
          </h1>
          <Link to="/">
            <button className="rounded bg-black text-[#c19167] p-3 mt-3">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error404;
