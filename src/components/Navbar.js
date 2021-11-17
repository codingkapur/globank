import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav__container">
      <p className="nav__logo">GloBank</p>
      <ul className="nav__links">
        <li>
          <p className="nav__link login__btn">Log In</p>
        </li>
        <li>
          <p className="nav__link signup__btn">Sign Up</p>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
