import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Student from './pages/Student';
import Addstudent from './pages/Addstudent';
import Editstudent from './pages/Editstudent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/students"} element={<Student />} />
        <Route path={"/add-student"} element={<Addstudent />} />
        <Route path={"/edit-student/:id"} element={<Editstudent />} />
      </Routes>
      <footer id="footer" class="footer">
        <div class="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>NiceAdmin</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
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
