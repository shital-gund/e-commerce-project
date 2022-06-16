// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import { Routes, Route } from 'react-router-dom';
import NavBar from "./theme-layout/navbar/NavBar";
import Home from "./theme-layout/navbar/Home/Home";
import Courses from "./theme-layout/navbar/Courses";
import Blog from "./theme-layout/navbar/Blog";
import Documentation from "./theme-layout/navbar/Documentation";
import Pages from "./theme-layout/navbar/Pages";
import Shop from "./theme-layout/navbar/Shop";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
            <Route exact path="/" element = {<Home />} />
            {/* <Route exact path="/Home" element = {<Home />} /> */}
            <Route exact path="/Courses" element = {<Courses />} />
            <Route exact path="/Pages" element = {<Pages />} />
            <Route exact path="/Blog" element = {<Blog />} />
            <Route exact path="/Shop" element = {<Shop />} />
            <Route exact path="/Documentation" element = {<Documentation />} />
    </Routes>
    <div>
      <NavBar />
    </div>
    </div>

  );
}

export default App;
