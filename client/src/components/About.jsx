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
          Over time, it grew repetitive and lost the appeal it once held.
          I found myself only truly engaged on the rare occasions when I would
          be presented with a problem that was not routine and that I had not
          seen dozens of times before. That fraction of the time was the most
          rewarding, interesting, and stimulating part of the job because I
          learned something new. It was the desire to have that experience more
          often that led me to investigate other career options. I had always
          found programming fascinating and thought the barrier to entry was too
          guarded for me to overcome. Until I met several other people that had
          successfully transitioned into the space with non-traditional
          backgrounds. This motivated me to take a chance on a programming
          bootcamp, where I found exactly what I was looking for.
        </p>
        <p>
          I know this is the part where I am supposed to say I am “committed to
          building secure, scalable software” (why would anyone not build
          secure, scalable software?) and that I am a “dynamic and
          results-driven developer,” along with a laundry list of other tech
          resume clichés and platitudes. However, after reading these lines time
          and time again on the various LinkedIn profiles of other developers, I
          can’t help but feel that in many cases these sentiments are just AI
          crafted, disingenuous, buzzword nonsense.
        </p>
        <p>
          For me, the reality is that I just genuinely love creative
          problem-solving and learning. If someone would pay me a living wage to
          attend university full time, that is what I would be doing. But in
          lieu of that, I think software development is a strong second. There
          is no shortage of problems to be solved and you couldn’t hope to learn
          everything there is to know about it in a lifetime.
        </p>
        <p>
          Yes, I know that software development (particularly for juniors) isn’t
          a never-ending problem-solving bonanza and that it can be monotonous,
          tedious, and frustrating at times. But I have found that nine times
          out of ten, it is disproportionately rewarding. There are few better
          feelings than finally grasping a difficult concept and having that
          epiphany moment. After sometimes hours of struggle (and maybe a coffee
          break), realizing how to solve a problem or fix a bug, or finally
          putting the finishing touches on a project and stepping back to look
          at your creation. These are the things that make the day-to-day grind
          worth the effort.
        </p>
      </div>
    </>
  );
}

export default About;
