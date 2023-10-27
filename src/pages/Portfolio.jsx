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
  img: {
    display: "flex",
    flex: "1 0 50%",
    flexWrap: "wrap",
    boxShadow: "5px 8px 10px var(--accentblue)",
    borderRadius: 10,
    padding: "1em",
  },
};
import "./portfolio.css";
export default function Portfolio() {
  return (
    <div>
      <br />
      <h2>Portfolio </h2>
      <section id="work" className="column">
        <a
          className="smallerwork"
          href="https://pet-play-ground-b3dfbe3f359a.herokuapp.com/login"
          target="blank"
          style={styles.img}
        >
          <img
            className="site"
            src="../src/assets/petplayground.png"
            alt="Pet Playground"
          />
          <p className="caption">Pet Playground</p>
        </a>
        <a
          className="smallerwork"
          href="https://tonkel.github.io/take-me-out/"
          target="blank"
        >
          <img
            className="site"
            src="../src/assets/takemeout.png"
            alt="Take Me Out"
          />
          <p className="caption">Take Me Out</p>
        </a>
        <a
          href="https://j-a-t-e-apps-6ef4b672022f.herokuapp.com/"
          target="blank"
        >
          <img
            className="site"
            src="../src/assets/jate.png"
            alt="JATE picture"
          />
          <p className="caption">J.A.T.E.</p>
        </a>
        <a
          className="smallerwork"
          href="https://contactlist5400-ae683ebf0da4.herokuapp.com/"
          target="blank"
        >
          <img
            className="site"
            src="../src/assets/icontactcards.png"
            alt="iContact Card"
          />
          <p className="caption">iContact Card</p>
        </a>

        <a
          className="smallerwork"
          href="https://maddykm.github.io/work-day-planner/"
          target="blank"
        >
          <img
            className="site"
            src="../src/assets/workdayplanner.png"
            alt="Workday Scheduler"
          />
          <p className="caption">Workday Scheduler</p>
        </a>

        <a
          className="smallerwork"
          href="https://maddykm.github.io/password-generator/"
          target="blank"
        >
          <img
            className="site"
            src="../src/assets/passwordgenerator.png"
            alt="Password Generator"
          />
          <p className="caption">Password Generator </p>
        </a>
      </section>
    </div>
  );
}
