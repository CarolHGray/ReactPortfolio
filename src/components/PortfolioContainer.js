import React from "react";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
//import Portfolio from "./pages/Project/projects";

// Function that renders selected page state & exports
export default function PortfolioContainer({ currentPage, setCurrentPage }) {
  if (currentPage === "About") {
    return <About />;
  }
  if (currentPage === "Contact") {
    return <Contact />;
  }
  
  //return <Portfolio />;
}
