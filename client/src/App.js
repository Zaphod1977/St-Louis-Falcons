import React, { useState } from 'react';
import Home from './pages/Home.js';
import Facility from './pages/Facility.js';
import Nation from './pages/Nation.js';
import Roster from './pages/Roster.js';
import Calendar from './pages/Calendar.js';
import Footer from './components/Footer';
import Land from "./pages/Land"
import Header from "./components/Header";
import User from './pages/User.js';

function App() {
  const [currentPage, setCurrentPage] = useState(
    "Land"
  );

  // ternary opperator for the to render Land w/o nav 
  const header = currentPage == "Land" || "User" ? "" : <Header
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
  ></Header>

  // ternary opperator for the to render Land w/o nav 
  const footer = currentPage == "Land" || "User" ? "" : <Footer
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
  ></Footer>

  const switchPage = (page) => {
    switch (page) {
      case "Land":
        return <Land currentPage={currentPage}
          setCurrentPage={setCurrentPage} />;
      case "User":
        return <User setCurrentPage={setCurrentPage} />;
      case "Facility":
        return <Facility />;
      case "Nation":
        return <Nation />;
      case "Roster":
        return <Roster />;
      case "Calendar":
        return <Calendar />;
      case "Home":
        return <Home currentPage={currentPage}
          setCurrentPage={setCurrentPage} />
      default:
        return <Land currentPage={currentPage}
          setCurrentPage={setCurrentPage} />;
    };
  }

  return (
    <div className='wrapper'>
      {header}
      <main>{switchPage(currentPage)}</main>
      {footer}
    </div>
  );
}

export default App;
