import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Student extends Component {
  state = {
    students: [],
    loading: true,
  };

  async componentDidMount() {
    const res = await axios.get("https://nuzul.com.my/api/students");
    //console.log(res);
    if (res.data.status === 200) {
      this.setState({
        students: res.data.students,
        loading: false,
      });
    }
  }

  

  render() {

    const style1 = {
        borderRadius: 10,
    }

    var student_HTMLTABLE = "";

    if (this.state.loading) {
      student_HTMLTABLE = (
        <tr>
          <td>
            <h2 colSpan="6">Loading..</h2>
          </td>
        </tr>
      );
    } else {
      // student_HTMLTABLE =
      // this.state.students.map( (item) => {
      //     return(
      //         <tr key={item.id}>
      //             <td>{item.id}</td>
      //             <td>{item.name}</td>
      //             <td>{item.course}</td>
      //             <td>{item.email}</td>
      //             <td>{item.phone}</td>
      //             <td>
      //                 <Link to={'edit-student/${item.id}'} className='btn btn-success btn-sm'>Edit</Link>
      //                 <button className='btn btn-danger btn-sm'>Delete</button>
      //             </td>
      //         </tr>
      //     );
      // });
      student_HTMLTABLE = this.state.students.map((item) => {
        return (
          <div className="row" key={item.id}>
            <div className="col-sm-1">
              <div className="alert alert-primary shadow-lg" style={style1}>{item.id}</div>
            </div>
            <div className="col-sm-3">
              <div className="alert alert-primary shadow-lg" style={style1}>{item.name}</div>
            </div>
            <div className="col-sm-2">
              <div className="alert alert-primary shadow-lg" style={style1}>{item.course}</div>
            </div>
            <div className="col-sm-2">
              <div className="alert alert-primary shadow-lg" style={style1}>{item.email}</div>
            </div>
            <div className="col-sm-2">
              <div className="alert alert-primary shadow-lg" style={style1}>{item.phone}</div>
            </div>
            <div className="col-sm-2">
              <Link to={`edit-student/${item.id}`} className="btn btn-success">Edit</Link>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="container">
        <div className="row" style={{height: 900}}>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Students Data
                  <Link
                    to={"add-student"}
                    className="btn btn-primary btn-sm float-end"
                  >
                    Add Student
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                {student_HTMLTABLE}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
