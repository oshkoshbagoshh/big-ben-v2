import React from "react";
import Home from "./Pages/Home";
// import Search from "./Pages/Search";
import LogIn from "./Pages/LogIn";
// import Page_2 from "./Pages/Page_2/Page_2";

export default function SiteContainer({ currentPage, setCurrentPage }) {
  if (currentPage === "Home") {
    return <Home />;
  }
  if (currentPage === "Search") {
    return <Search />;
  }
  if (currentPage === "LogIn") {
    return <LogIn />;
  }
  else {
    return <Page_2 />;
  }
}

module.exports = SiteContainer;