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
  contact: {
    minHeight: "100vh",
  },
};
export default function Contact() {
  return (
    <div style={styles.contact}>
      <br />
      <h2>Contact Me</h2>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <br />
      <br />
      <br />
    </div>
  );
}
