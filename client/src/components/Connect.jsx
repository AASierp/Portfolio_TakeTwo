function Connect() {
  return (
    <>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          color: "rgb(255, 170, 76)",
          // backgroundColor: "rgb(48, 58, 75)",
          fontWeight: "bold",
          padding: "1rem",
          width: "100vw",
          marginBottom: "3rem",
          marginTop: "3rem",
        }}
      >
        Let's Connect...
      </h2>

      <div id="contact" className="contact-container">
        <img
          className="anchor-img"
          style={{
            width: "2rem",
          }}
          src="/images/email1.png"
        />
        <a className="footer-anchors" href="mailto:AaronSierp@gmail.com">
          {" "}
          AaronSierp@gmail.com
        </a>
        <img
          className="anchor-img-phone"
          style={{
            width: "2rem",
          }}
          src="/images/Phone.png"
        />
        <p className="footer-anchors" style={{ color: "rgb(255, 170, 76)" }}>
          859.420.4144
        </p>
        <img
          className="anchor-img"
          style={{
            width: "2rem",
          }}
          src="/images/github.png"
        />
        <a className="footer-anchors" href="https://github.com/AASierp">
          GitHub
        </a>
        <img
          className="anchor-img"
          style={{
            width: "2rem",
          }}
          src="/images/link.png"
        />
        <a
          className="footer-anchors"
          href="https://www.linkedin.com/in/aaron-sierp"
        >
          LinkedIn
        </a>
      </div>
    </>
  );
}

export default Connect;
