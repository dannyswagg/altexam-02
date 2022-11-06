import React from "react";
import Error404 from "./Components/Error404";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Repos from "./Components/Repos";
// import Repo from "./Components/Repo";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary";
import InnerRepo from "./Components/InnerRepo";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="repositories" element={<Repos />} />
          <Route path="repositories/innerrepo/:id" element={<InnerRepo />} />
          <Route path="*" element={<Error404 />} />
          <Route path="errorboundary" element={<ErrorBoundary />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
