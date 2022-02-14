import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./pages/home";
import Student from "./pages/Student";
import Addstudent from "./pages/Addstudent";
import Editstudent from "./pages/Editstudent";
import Dashboard from "./pages/Dashboard";
import Header from "./pages/Header";
import Login from "./pages/Login";
import Form from "./pages/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route path={"/students"} element={<Student />} />
        <Route path={"/add-student"} element={<Addstudent />} />
        <Route path={"/edit-student/:id"} element={<Editstudent />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/form"} element={<Form />} />
        <Route path={"*"} element={<Login />} />
      </Routes>
      <footer id="footer" class="footer">
        <div class="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Alumni Portal</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a>IT UCYP</a>
        </div>
      </footer>

      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </BrowserRouter>
  );
}

export default App;
