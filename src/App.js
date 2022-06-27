import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Navbar from './theam layout/navbar/Navbar';
import {Route, Routes} from 'react-router-dom'
import Home from './theam layout/components/Home.js'
import Shop from './theam layout/components/Shop';
import Featured from './theam layout/components/Featured'
import Recommanded from './theam layout/components/Recommanded';
function App() {
  return (
    <div className="App">
       <Routes>
             <Route exact path="/" element = {<Home />} />
             <Route exact path="/shop" element = {<Shop />} />
             <Route exact path="/featured" element = {<Featured/>} />
             <Route exact path="/recommended" element = {<Recommanded/>} />
       </Routes>
    </div>
  );
}

export default App;
