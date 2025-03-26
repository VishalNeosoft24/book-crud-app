import React, { useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { admin } from "../businesslogic/adminDetails";
import { useNavigate } from "react-router";

export default function LoginFom() {
  const [cookie, setCookie, removeCookie] = useCookies("admin");
  const [errorMessage, setErrorMessage] = useState();

  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  function adminLogin(e) {
    e.preventDefault();
    if (
      admin.email === email.current.value &&
      admin.password === password.current.value
    ) {
      setCookie("admin", email.current.value);
      navigate("/home");
    } else {
      setErrorMessage("Incorrect Username and Password");
    }
  }

  return (
    <div className="container">
      <h3 className="text-center">Login Form</h3>
      <div>
        <small className="text-danger">{errorMessage}</small>
      </div>
      <form onSubmit={adminLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            ref={email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            autoComplete="email"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            ref={password}
            className="form-control"
            id="exampleInputPassword1"
            autoComplete="current-password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
