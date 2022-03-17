import React, { Component, useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Login = () => {

  const MySwal = withReactContent(Swal)

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`The name you entered was: ${username} and ${password}`);
    axios
      .post("https://smarthelpersystem.ucyp.edu.my/alumniportal/public/api/login2", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.status == 200) {
          //   alert(response.data.session);

          sessionStorage.setItem("session", response.data.idalumnidata);
          sessionStorage.setItem("idpangkat", response.data.idpangkat);
          let sessiondata = sessionStorage.getItem("session");
          console.log("session sekarang adalah: " + sessiondata);

          //   window.location.href =
          //     "/dashboard?idalumni=" + response.data.idalumnidata;
          setRedirect(true);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Username or password incorrect!',
            footer: '<a href="register">Have you registered an account?</a>'
          })
        }
      });
  };

  if (redirect == true) {
    // return <Navigate replace to="/login" />;
    // window.location.href = "/edit-student/1";
    return <Navigate replace to="/dashboard" />;
  }

  //   useEffect(() => {
  //     const fnredirect = () => {
  //       //   window.location.href = "/dashboard";
  //     };

  //     if (redirect) fnredirect();
  //   }, [redirect]);

  return (
    <main>
      <div class="container">
        <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div class="d-flex justify-content-center py-4">
                  <div class="logo d-flex align-items-center w-auto">
                    <img src="https://ekiba.ucyp.edu.my/images/kyplogo.png" alt="" />
                    <span class="d-none d-lg-block">Alumni Portal</span>
                  </div>
                </div>

                <div class="card mb-3">
                  <div class="card-body">
                    <div class="pt-4 pb-2">
                      <h5 class="card-title text-center pb-0 fs-4">Login.</h5>
                      <p class="text-center small">
                        Enter username and password to login.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      class="row g-3 needs-validation"
                      novalidate
                    >
                      <div class="col-12">
                        <label for="yourUsername" class="form-label">
                          Username
                        </label>
                        <div class="input-group has-validation">
                          <span class="input-group-text" id="inputGroupPrepend">
                            <i className="fas fa-user"></i>
                          </span>
                          <input
                            type="text"
                            name="username"
                            class="form-control"
                            id="yourUsername"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                          />
                          <div class="invalid-feedback">
                            Please enter your username.
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="yourPassword" class="form-label">
                          Password
                        </label>
                        <div class="input-group has-validation">
                          <span class="input-group-text" id="inputGroupPrepend">
                            <i className="fas fa-lock"></i>
                          </span>
                          <input
                            type="password"
                            name="password"
                            class="form-control"
                            id="yourPassword"
                            // onChange={this.handleInput}
                            // value={this.state.password}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        <div class="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>
                      <div class="col-12">
                        <button class="btn btn-danger w-100" type="submit">
                          Login
                        </button>
                      </div>
                      <div class="col-12">
                        <p class="small mb-0">
                          Don't have account? <Link to={"/register"}>Register</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
