function Hero() {
  return (
    <div className="two-column-hero">
      <div className="hero-column1 img-me-container">
        <img
          className="me"
          alt="picture of Aaron Sierp"
          src="/images/linkedin_profile_picture.jpg"
        />
      </div>

      <div className="hero-container hero-column2">
        <div className="tag">
          <h3 style={{ color: "white" }}>Hi, my name is...</h3>
          <h1
            style={{
              color: "rgb(255, 170, 76)",
              fontWeight: "bold",
              lineHeight: "6rem",
              marginLeft: "4rem",
            }}
          >
            Aaron Sierp
          </h1>
        </div>
        <p className="hero-paragraph">
          I'm a Software developer with hands-on experience in C#/.NET, SQL,
          JavaScript, React, and Node.js. 10+ years in Electrical &
          Instrumentation with proven skills in problem-solving,
          troubleshooting, and project execution. Recent contract work includes
          building web applications with document management features and
          automation tools. I am primarily interested in creative problem
          solving and continuous learning. Pursuing software development has
          allowed me to satisfy my genuine curiosity for learning while building
          solutions that solve real problems.
        </p>
      </div>
    </div>
  );
}

export default Hero;
