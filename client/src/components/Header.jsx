import HamburgerMenu from "./HamburgerMenu";

function Header() {
  return (
    <div id="home" className="header-container">
      <nav className="desktop-nav">
        <div className="mono-wrap">
          <a href="/" className="monogram" aria-label="Home">
            <img className="mono" src="/images/mono.jpg" alt="" />
          </a>

          <nav className="mono-pop" aria-label="Social">
            <a href="https://github.com/aasierp" className="pop-item">
              <img
                style={{width: "2rem" }}
                src="/images/github.png"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aaron-sierp"
              className="pop-item"
            >
              <img
                style={{ width: "2rem" }}
                src="/images/link.png"
              />
            </a>
            <a href="mailto:aaronsierp@gmail.com" className="pop-item">
              <img
                style={{background: "transparent" , width: "2rem" }}
                src="/images/email1.png"
              />
            </a>
          </nav>
        </div>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Connect</a>
        <a href="/assets/Resume_Tech0.pdf" target="_blank">
          Resume
        </a>
      </nav>
      <div className="title"></div>
      <HamburgerMenu />
    </div>
  );
}

export default Header;
