import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import App from '../App';
// import Table from "./table";

function Login() {
  const navigate = useNavigate();
  //   const [showComponent, setShowComponent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const firstname = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;
    if (firstname == "prashanth" && password == "123456") {
      alert("Login Successfully");

      navigate("/table");
    } else {
      alert("Invalid UserName or Password");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="login col-6 d-flex justify-content-center mt-5 ">
          <form className="col-8 ">
            <h1 className="text-center">Login</h1>

            <div className="mb-3 ">
              <label for="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block mb-4"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
