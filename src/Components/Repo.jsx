// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const Repo = () => {
//   const location = useLocation();
//   const data = location.state?.repos;
//   const [repo, setRepo] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const getRepo = async () => {
//       setLoading(true);
//       const response = await fetch(
//         `https://api.github.com/users/dannyswagg/repos/${id}`
//       );
//       setRepo(await response.json());
//       setLoading(false);
//     };
//     getRepo();
//   }, []);

//   const Loading = () => {
//     return (
//       <>
//         <h1 className=" bg-[#F6EED8] text-[#c19167] pt-16 text-center h-screen font-bold lg:text-8xl md:text-6xl sm:text-3xl tracking-wide">
//           Loading...
//         </h1>
//       </>
//     );
//   };
//   const ShowRepo = () => {
//     return (
//       <>
//         <div>{data.name}</div>
//       </>
//     );
//   };
//   return (
//     <>
//       <div>{loading ? <Loading /> : <ShowRepo />}</div>
//     </>
//   );
// };

// export default Repo;
