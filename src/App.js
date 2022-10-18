import React, { useState } from 'react';
import Home from './pages/Home.js';
import Facility from './pages/Facility.js';
import Nation from './pages/Nation.js';
import Roster from './pages/Roster.js';
import Calendar from './pages/Calendar.js';
import Footer from './components/Footer';
import Land from "./pages/Land"
import Header from "./components/Header";

// const Login = (props) => {
//   const [formState, setFormState] = useState({ email: '', password: '' });

function App() {
  const [currentPage, setCurrentPage] = useState(
    "Land"
  );

// ternary opperator for the to render Land w/o nav 
  const header = currentPage == "Land" ? "" : <Header
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
  ></Header>

// ternary opperator for the to render Land w/o nav 
const footer = currentPage == "Land" ? "" : <Footer
currentPage={currentPage}
setCurrentPage={setCurrentPage}
></Footer>

  const switchPage = (page) => {
    switch (page) {
      case "Home":
        return <Home />;
      case "Facility":
        return <Facility />;
      case "Nation":
        return <Nation />;
      case "Roster":
        return <Roster />;
      case "Calendar":
        return <Calendar />;
      case "Land":
        return <Land />
      default:
        return <Land />;
    };
  }

  return (
    <div className='wrapper'>
      {header}
      <div className="hero">
      </div>
      <main>{switchPage(currentPage)}</main>
      {footer}
    </div>
  );
}

export default App;
