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
  buttons: {
    margin: ".5em",
  },
  footer: {
    position: "absolute",
    width: "100%",
    padding: ".25em",
    backgroundImage: "url(../src/assets/cool-background.png)",
  },
};

export default function Footer() {
  return (
    <>
      <div className="blockcode">
        <footer className="page-footer shadow" style={styles.footer}>
          <div className="d-flex flex-wrap justify-content-between align-items-center mx-auto py-4">
            <div className="d-flex flex-wrap align-items-center">
              <small className="ms-2">&copy; Maddy Kasemichael, 2023.</small>
            </div>
            <div>
              <button
                className="btn btn-warning btn-flat p-2"
                style={styles.buttons}
              >
                <a href="https://github.com/MaddyKm">GITHUB</a>
              </button>
              <button className="btn btn-warning btn-flat p-2">
                <a href="https://www.linkedin.com/in/madeleine-kasemichael-91b10220b/">
                  LINKEDIN
                </a>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
