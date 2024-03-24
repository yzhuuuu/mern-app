import { Link } from "react-router-dom";
import { Logo } from "../components/index.js";
import Wrapper from "../assets/wrappers/LandingPage.js";
import main from "../assets/images/main.svg";
function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam
            aliquam sem et tortor consequat id. Massa tincidunt nunc pulvinar
            sapien. Sagittis vitae et leo duis ut. Nisi porta lorem mollis
            aliquam ut porttitor leo a. At ultrices mi tempus imperdiet nulla
            malesuada pellentesque.
          </p>
          <Link to={"/register"} className="btn register-link">
            register
          </Link>
          <Link to={"/login"} className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
