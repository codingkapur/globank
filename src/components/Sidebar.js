//Style Imports
import "./Sidebar.css";
import { FaTimes } from "react-icons/fa";
//Context Import
import { useGlobalContext } from "../context";
import Navbar from "./Navbar";
const Sidebar = () => {
  const { showSidebar, closeSidebar, showLoginForm } = useGlobalContext();
  return (
    <div
      className={
        showSidebar ? "sidebar__container show-sidebar" : "sidebar__container"
      }
    >
      <div className="sidebar__top--container">
        <p className="nav__logo">
          <span className="logo-label">Glo</span>Bank
        </p>
        <FaTimes
          className="sidebar__toggle--btn close-sidebar__btn"
          onClick={closeSidebar}
        />
      </div>
      <div className="links__container">
        <ul className="nav__links--pages-sidebar">
          <li>
            <p className="services__label nav__pages--label sidebar__pages--label">
              Services
            </p>
          </li>
          <li>
            <p className="pricing__label nav__pages--label sidebar__pages--label">
              Pricing
            </p>
          </li>
          <li>
            <p className="works__label nav__pages--label sidebar__pages--label">
              How It Works
            </p>
          </li>
          <li>
            <p className="contact__label nav__pages--label sidebar__pages--label">
              Contact
            </p>
          </li>
        </ul>
        <ul className="nav__links-sidebar">
          <li>
            <p
              className="nav__link login__btn nav__link--sidebar"
              onClick={showLoginForm}
            >
              Log In
            </p>
          </li>
          <li>
            <p className="nav__link signup__btn nav__link--sidebar">Sign Up</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
