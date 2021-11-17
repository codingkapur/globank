import "./Navbar.css";
import { useGlobalContext } from "../context";
const Navbar = () => {
  const { showLoginForm } = useGlobalContext();
  return (
    <nav className="nav__container">
      <p className="nav__logo"><span className="logo-label">Glo</span>Bank</p>
      <ul className="nav__links--pages">
      <li>
          <p className="services__label nav__pages--label">Services</p>
        </li>
        <li>
          <p className="pricing__label nav__pages--label">Pricing</p>
        </li>
        <li>
          <p className="works__label nav__pages--label">How It Works</p>
        </li>
        <li>
          <p className="contact__label nav__pages--label">Contact</p>
        </li>
      </ul>
      <ul className="nav__links">
        <li>
          <p className="nav__link login__btn" onClick={showLoginForm}>
            Log In
          </p>
        </li>
        <li>
          <p className="nav__link signup__btn">Sign Up</p>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
