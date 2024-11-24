import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1 className="hero__text--title">MM Army</h1>
        <h2 className="hero__text--sub-title">Sales Service Specialists</h2>
      </div>
      <img
        className="hero__logo"
        src="src/assets/images/logo.PNG"
        alt="mm army logo"
      />
      <div className="hero__socials">
        <a className="hero__socials--item" href="https://www.facebook.com/">
          <img
            className="hero__socials--icon"
            src="src/assets/icons/facebook-icon.svg"
            alt="facebook icon"
          />
        </a>
        <a className="hero__socials--item" href="https://www.instagram.com/">
          <img
            className="hero__socials--icon"
            src="src/assets/icons/instagram-icon.svg"
            alt="instagram icon"
          />
        </a>
        <a className="hero__socials--item" href="https://www.linkedin.com/">
          <img
            className="hero__socials--icon"
            src="src/assets/icons/linkedin-icon.svg"
            alt="linkedin icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
