function About() {
  return (
    <>
      <h2
        id="about"
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          color: "rgb(255, 170, 76)",
          // backgroundColor: "rgb(48, 58, 75)",
          fontWeight: "bold",
          padding: "1rem",
          width: "100vw",
          // marginBottom: "1rem",
          marginTop: "3rem",
        }}
      >
        A Word About Me...
      </h2>
      <div className="about-container">
        <p>
          I spent fifteen years working in electrical maintenance and controls.
          Over time, I realized that the parts of the job I found most rewarding
          were the moments that broke from routine, the unfamiliar problems, the
          troubleshooting, and the opportunities to learn something new. Those
          challenges were the most engaging and energizing part of the work, and
          they pushed me to start thinking seriously about a career that would
          offer more of that kind of experience.
        </p>
        <p>
          I had always been drawn to programming, but for a long time it felt
          like a world that was difficult to break into without a traditional
          background. That changed when I met people who had successfully made
          the transition themselves. Seeing that path was possible gave me the
          confidence to take a chance on a programming bootcamp, and once I did,
          I found exactly what I had been looking for.
        </p>
        <p>
          What drew me in, and what continues to keep me motivated, is the
          combination of creative problem solving and continuous learning.
          Software development offers both in abundance. There is always
          something new to understand, something to improve, and some better way
          to build. That constant opportunity for growth is a big part of what
          makes this field so exciting to me.
        </p>
        <p>
          I also appreciate that software development is not glamorous every
          moment of every day. Like any worthwhile craft, it comes with
          frustration, repetition, and the occasional stretch of tedious work.
          But more often than not, the effort pays off in a meaningful way.
          There are few things more satisfying than finally understanding a
          difficult concept, solving a stubborn bug, or finishing a project and
          seeing an idea become something real and functional.
        </p>
        <p>
          That sense of progress, of building, learning, and improving over
          time, is what makes this work deeply rewarding to me. It is why I
          chose this path, and why I am excited to keep growing in it.
        </p>
      </div>
    </>
  );
}

export default About;
