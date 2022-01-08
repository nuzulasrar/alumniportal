import React, { Component } from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

function Editstudent() {
  let { id } = useParams();

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [checkstudent, setCheckstudent] = useState(true);

  useEffect(() => {
    const getstudentdata = async () => {
      axios
        .get(`https://nuzul.com.my/api/edit-students/${id}`)
        .then((res) => {
          setCheckstudent(false);
          //navigate users based on the response

          if (res.data.statusCode === 200) {
            setName(res.data.student.name);
            setCourse(res.data.student.course);
            setEmail(res.data.student.email);
            setPhone(res.data.student.phone);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (checkstudent) getstudentdata();
  }, [checkstudent]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Edit {id} Students
                <Link to={"/"} className="btn btn-primary btn-sm float-end">
                  Back
                </Link>
              </h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="">Student Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="">Student Course</label>
                  <input
                    type="text"
                    name="course"
                    value={course}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="">Student Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="">Student Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editstudent;
