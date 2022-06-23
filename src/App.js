import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Navbar from './theam layout/navbar/Navbar';
import {Route, Routes} from 'react-router-dom'
// import Home from "./Theme Layout/navbar/Home";
// import Courses from "./Theme Layout/navbar/Courses";
// import Courses from "./Theme Layout/navbar/Courses";
// import Pages from "./Theme Layout/navbar/Pages";
// import Blog from "./Theme Layout/navbar/Blog";
// import Shop from "./Theme Layout/navbar/Shop";
// import Documentation from "./Theme Layout/navbar/ Documentation";
function App() {
  return (
    <div className="App">
    <Navbar/>
    
      <Routes>
            {/* <Route exact path="/" element = {<Home />} />
            <Route exact path="/Courses" element = {<Courses />} />
            <Route exact path="/Pages" element = {<Pages />} />
            <Route exact path="/Blog" element = {<Blog />} />
            <Route exact path="/Shop" element = {<Shop />} />
            <Route exact path="/Documentation" element = {<Documentation />} /> */}
   
      </Routes>
    </div>
  );
}

export default App;
