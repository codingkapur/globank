// Style Imports
import "./Login.css";
import { FaTimes } from "react-icons/fa";
//Context Import
import { useGlobalContext } from "../context";
//Library Imports
import { useState } from "react";
const Login = () => {
  const { closeLoginForm } = useGlobalContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(username, password);

    closeLoginForm();
  };
  return (
    <div className="login__modal--container active">
      <FaTimes className="modal__close--btn" onClick={closeLoginForm} />
      <div className="modal__form--container">
        <h1 className="signin__label">Sign In</h1>
        <form className="modal__form" onSubmit={(e) => handleSubmit(e)}>
          <div className="form__control--input form__control">
            <input
              type="text"
              className="form__input--username form__input"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <span></span>
            <label className="form__control--label">Username:</label>
          </div>
          <div className="form__control--input form__control">
            <input
              type="text"
              className="form__input--password form__input"
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span></span>
            <label className="form__control--label">Password:</label>
          </div>
          <div className="modal-forgot-password">
            <p className="forgot-password__label">Forgot Password?</p>
          </div>
          <div className="btn-sign-in-container">
            <button className="btn-sign-in btn-form" type="submit">
              Sign In
            </button>
            <div className="sign-up-form-text-container">
              <p className="sign-up-form-text">
                Don't have an account? Sign up &nbsp;
                <strong className="send-to-sign-up">here</strong>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
