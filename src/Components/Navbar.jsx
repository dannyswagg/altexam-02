import React from "react";
import { Link } from "react-router-dom";
import { FaDailymotion } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="bg-black text-[#c19167] flex justify-between items-center py-4 px-8 lg:h-28 md:h-28 sm:h-20  w-full">
        <Link to="/">
          <div>
            <FaDailymotion size={40} className="text-[#C19167]" />
          </div>
        </Link>
        <ul className=" mx-auto flex">
          <Link to="/">
            <li className="p-4 ml-6 hidden md:flex uppercase">Home</li>
          </Link>

          <Link to="/">
            <li className="lg:text-6xl md:text-5xl sm:text-5xl font-bold ml-6 px-4 flex items-center justify-center">
              BoXX
            </li>
          </Link>
          <Link to="repositories">
            <li className="p-4 ml-6 hidden md:flex uppercase">Repositories</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
