import React from "react";
import { Link } from "react-router-dom";
import { FaDailymotion } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="bg-black text-[#c19167] flex items-center py-5 px-4 w-full">
        <Link to="/">
          <div>
            <FaDailymotion size={40} className="text-[#C19167]" />
          </div>
        </Link>
        <ul className="mx-auto flex text-lg font-bold">
          <Link to="/">
            <li className="hidden md:flex uppercase justify-between px-4">
              Home
            </li>
          </Link>

          <Link to="/">
            <li className="font-bold justify-center px-4">DoXX</li>
          </Link>
          <Link to="repositories">
            <li className="hidden md:flex uppercase px-4">Repos</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
