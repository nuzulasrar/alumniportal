import React, { Component, useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Register = () => {
  
  const MySwal = withReactContent(Swal)

  const [ic, setIC] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [redirect, setRedirect] = useState(false);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    var form = document.forms.namedItem("registerform");

    const fd = new FormData(form);

    if(inputs.password != inputs.password2)
    {
      
      MySwal.fire({
        title: <p>Hello World</p>,
        footer: 'Copyright 2018',
        didOpen: () => {
          // `MySwal` is a subclass of `Swal`
          //   with all the same instance & static methods
          MySwal.clickConfirm()
        }
      }).then(() => {
        return MySwal.fire(<p>Please make sure both passwords match!</p>)
      })
    } else {
      axios.post(
        "https://smarthelpersystem.ucyp.edu.my/alumniportal/public/api/register",
        fd,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
    }

    
  };

  if (redirect == true) {
    return <Navigate replace to="/login" />;
  }

  return (
    <main>
      <div class="container">
        <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div class="d-flex justify-content-center py-4">
                  <div class="logo d-flex align-items-center w-auto">
                    <img
                      src="https://ekiba.ucyp.edu.my/images/kyplogo.png"
                      alt=""
                    />
                    <span class="d-none d-lg-block">Alumni Portal</span>
                  </div>
                </div>

                <div class="card mb-3">
                  <div class="card-body">
                    <div class="pt-4 pb-2">
                      <h5 class="card-title text-center pb-0 fs-4">
                        Register.
                      </h5>
                      <p class="text-center small">
                        Fill in all information below.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} name="registerform">
                      <div class="col-12">
                        <label for="yourUsername" class="form-label">
                          IC Number
                        </label>
                        <div class="input-group has-validation">
                          <span class="input-group-text" id="inputGroupPrepend">
                            <i className="fas fa-id-card"></i>
                          </span>
                          <input
                            type="text"
                            name="ic"
                            class="form-control"
                            id="ic"
                            value={inputs.ic || ""} 
                            onChange={handleChange}
                            required
                          />
                          <div class="invalid-feedback">
                            Please enter your username.
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="yourUsername" class="form-label">
                          Create Username
                        </label>
                        <div class="input-group has-validation">
                          <span class="input-group-text" id="inputGroupPrepend">
                            <i className="fas fa-at"></i>
                          </span>
                          <input
                            type="text"
                            name="username"
                            class="form-control"
                            id="yourUsername"
                            value={inputs.username || ""} 
                            onChange={handleChange}
                            required
                          />
                          <div class="invalid-feedback">
                            Please enter your username.
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="yourUsername" class="form-label">
                          Active Email
                        </label>
                        <div class="input-group has-validation">
                          <span class="input-group-text" id="inputGroupPrepend">
                            <i className="fas fa-envelope"></i>
                          </span>
                          <input
                            type="email"
                            name="email"
                            class="form-control"
                            id="yourUsername"
                            value={inputs.email || ""} 
                            onChange={handleChange}
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
                            value={inputs.password || ""} 
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div class="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="password2" class="form-label">
                          Confirm Password
                        </label>
                        <div class="input-group has-validation">
                          <span class="input-group-text" id="inputGroupPrepend">
                            <i className="fas fa-lock"></i>
                          </span>
                          <input
                            type="password"
                            name="password2"
                            class="form-control"
                            id="password2"
                            // onChange={this.handleInput}
                            // value={this.state.password}
                            value={inputs.password2 || ""} 
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div class="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>
                      <div class="col-12 mt-2">
                        <button class="btn btn-primary w-100" type="submit">
                          Register
                        </button>
                      </div>
                      <div class="col-12">
                        <p class="small mb-0">
                          Have account? <Link to={"/login"}>Login</Link>
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

export default Register;
