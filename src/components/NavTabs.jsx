import "../styles.css";
const styles = {
  about: {
    width: "45%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1em",
    borderBottom: "grey",
    backgroundImage: "url(../src/assets/cool-background.png)",
  },
  nav: {
    color: "black",
  },
};
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li style={styles.nav}>
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li style={styles.nav}>
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li style={styles.nav}>
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li style={styles.nav}>
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
