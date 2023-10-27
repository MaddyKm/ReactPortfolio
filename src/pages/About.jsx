const styles = {
  about: {
    width: "45%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
};
export default function About() {
  return (
    <div>
      <br />
      <h2>About </h2>
      <img src="../src/assets/img_8382.jpg" style={styles.about} />
      <br />
      <p>
        Maddy is a native New Yorker, born and raised in upper Manhattan. With a
        background in theatre and early childhood education, she is excited to
        be diving into the world of software development and is currently a
        student at Columbia University's Full Stack bootcamp. When she's not
        playing around with her newly learned skills, she can be found hanging
        out with her cat, bouldering, or watching bad reality tv shows.
      </p>
    </div>
  );
}
