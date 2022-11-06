import React from "react";
import { useParams } from "react-router-dom";
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
      const result = response.data.find((yourdata) => yourdata.id === id);
      if (result) {
        setResult(result);
      }
    };
    getRepo();
  });

  //   useEffect(() => {
  //     const getRepos = () => {
  //       axios
  //         .get("https://api.github.com/users/dannyswagg/repos")
  //         .then((response) => {
  //           console.log(response);
  //           const result = response.data.find((yourData) => yourData.id === id);
  //           if (result) {
  //             setResult(result);
  //           }
  //           console.log(result);
  //           // setRepo(myRepo) || setLoading(false);
  //         });
  //     };
  //     getRepos();
  //   }, []);

  return (
    <>
      <div className="pt-8 bg-[#F6EED8] pb-8 p-4">
        <div className="text-center mx-auto lg:w-2/4 md:w-1/3 sm:w-[18rem]">
          <div
            className="rounded-sm shadow-lg p-5 bg-black text-[#C19167]"
            key={id}
          >
            <div className="card-body">
              <h1>Name: {result.name}</h1>
              <h2>Full-Name: {result.full_name}</h2>
              <h3>
                <h1>Size: {result.size}kb</h1>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerRepo;
