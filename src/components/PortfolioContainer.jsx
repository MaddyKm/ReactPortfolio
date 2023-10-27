import { useState } from "react";
import NavTabs from "./NavTabs";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import Footer from "./Footer";
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
};
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header style={styles.header}>
        <h1>Maddy Kasemichael</h1>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>

      <main className="mx-3">{renderPage()}</main>
      <Footer />
    </div>
  );
}
