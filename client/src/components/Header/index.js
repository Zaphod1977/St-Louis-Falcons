import React, { useEffect } from 'react';
import './index.css'
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    currentPage, setCurrentPage
  } = props;

  useEffect(() => {
    document.title = currentPage
  }, [currentPage]);

  return (
    <header>
      <h2>
        <a data-testid="link" href="#Home" onClick={() => setCurrentPage("Home")}>
          <span role="img" aria-label="camera"></span>Saint Louis Falcons
        </a>
      </h2>
      <nav>
        <ul className="banner">
          <li className={currentPage === "Nation" ? "currentPage" : ""}>
            <a data-testid="Nation" href="#Nation" onClick={() => setCurrentPage("Nation")}>
              Nation
            </a>
          </li>
          <li className={currentPage === "Calendar" ? "currentPage" : ""}>
            <a data-testid="Calendar" href="#Calendar" onClick={() => setCurrentPage("Calendar")}>
              Calendar
            </a>
          </li>
          <li className={currentPage === "Roster" ? "currentPage" : ""}>
            <a data-testid="Roster" href="#Roster" onClick={() => setCurrentPage("Roster")}>
              Roster
            </a>
          </li>
          <li className={currentPage === "Facility" ? "currentPage" : ""}>
            <a data-testid="Facility" href="#Facility" onClick={() => setCurrentPage("Facility")}>
              Facility
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;