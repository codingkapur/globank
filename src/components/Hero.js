// Style Imports
import "./Hero.css";
//Component Imports
import Overlay from "./Overlay";
import Login from "./Login";
import { useGlobalContext } from "../context";
const Hero = () => {
  const { showLogin } = useGlobalContext();
  return (
    <main className="hero__container">
      {showLogin ? <Overlay /> : null}
      {showLogin ? <Login /> : null}
      <div className="hero__text--container">
        <p className="hero__text--main">
          Global <span className="transaction-label">Transactions</span> <br />
          Single
          <span className="portal-label">Portal</span>
        </p>
        <div className="hero__text--sub--container">
          <p className="hero__text--sub hero__text--sub-1">Transactions Streamlined.</p>
          <p className="hero__text--sub hero__text--sub-2">Banking Simplified.</p>
          <p className="hero__text--sub hero__text--sub-3">Business Booming.</p>
        </div>
        <div className="hero__btn--container">
            <p className="hero__btn btn get-started-btn">Get Started</p>
            <p className="hero__btn btn get-started-btn">Learn More</p>
      </div>
      </div>
      <div className="hero__image"></div>
    </main>
  );
};
export default Hero;
