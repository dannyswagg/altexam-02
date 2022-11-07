import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const InnerRepo = () => {
  const [result, setResult] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getRepo = async () => {
      const response = await axios.get(
        "https://api.github.com/users/dannyswagg/repos"
      );
      console.log(response.data);
      const result = response.data.find((yourData) => yourData.id === id);
      if (result) {
        setResult(result);
      }
    };
    getRepo();
  });

  return (
    <>
      <div className="bg-black text-[#c19167] lg:w-2/4 md:w-fit w-fit mx-auto mt-8 rounded p-8">
        <h1 className="p-8 text-center font-bold">
          Repo id: <br /> {id} <br />
          <Link to="/">
            <button className="rounded bg-[#c19167] text-black p-3 mt-3 font-bold">
              Go Home
            </button>
          </Link>
        </h1>
      </div>
    </>
  );
};

export default InnerRepo;
