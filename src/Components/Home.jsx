import React from "react";
import bg from "../Assests/bg.jpg";
import { Link } from "react-router-dom";
import qq from "../Assests/qq.png";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-full">
        <img
          src={qq}
          className="image lg:hidden object-cover h-screen w-full"
          alt="Github animated logo and Groot from Guardian of the galaxy movie"
        />
        <img
          className="image lg:block md:hidden hidden object-cover h-screen w-full"
          src={bg}
          alt="Github animated logo and Groot from Guardian of the galaxy movie"
        />
        <div className="absolute px-5 top-5 text-[#C19167] h-screen">
          <h1 className="lg:text-8xl md:text-5xl text-2xl font-bold top-5">
            SYSTEM <br /> BoXX
          </h1>
          <p className=" text-black font-bold lg:text-2xl text-1xl px-3">
            A New System.
          </p>
          <div className="flex mt-4 bottom-0">
            <Link to="/repositories">
              <button className="bg-black rounded p-3 mr-4">
                Repositories
              </button>
            </Link>
            <Link to="/errorboundary">
              <button className="bg-black rounded p-3">ErrorBoundary</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;