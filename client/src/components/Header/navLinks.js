const navLinks = () => {
    return (
        // <nav>
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
        //   </nav>
    )
}

export default navLinks;