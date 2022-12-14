import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Repos = () => {
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const getRepos = () => {
    axios
      .get("https://api.github.com/users/dannyswagg/repos")
      .then((response) => {
        const myRepo = response.data;
        setRepo(myRepo) || setLoading(false);
      });
  };

  useEffect(() => {
    getRepos();
  }, []);

  const displayRepo = repo
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map(({ id, name, full_name, html_url, size }) => {
      return (
        <>
          <div className="pt-8 bg-[#F6EED8] pb-8 p-4">
            <div className="text-center mx-auto lg:w-2/4 md:w-1/3 w-[14rem]">
              <div
                className="rounded-sm shadow-lg p-5 bg-black text-[#C19167]"
                key={id}
              >
                <div className="card-body">
                  <h1>Name: {name}</h1>
                  <h2>Full-Name: {full_name}</h2>
                  <h3>
                    <a href={html_url} target="_blank" rel="noreferrer">
                      <h1>Size: {size}kb</h1>
                    </a>
                  </h3>
                  <Link to={`innerrepo/${id}`}>
                    <button className="uppercase border text-sm mt-2 border-[#3B990B] px-8 py-1 rounded-sm">
                      View Repo
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });

  const pageCount = Math.ceil(repo.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      {loading && (
        <h1 className=" bg-[#F6EED8] text-[#c19167] pt-16 text-center h-screen font-bold lg:text-8xl md:text-6xl sm:text-5xl tracking-wide">
          Loading...
        </h1>
      )}
      {displayRepo}

      <ReactPaginate
        className="flex bg-black lg:rotate-90 md:rotate-90 rotate-0 text-[1xl] text-[#c19167]
         w-fit lg:fixed md:fixed lg:top-2/4 md:top-2/4 p-4"
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtn"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"disabled"}
        activeClassName={"activeBtn"}
      />
    </div>
  );
};

export default Repos;
