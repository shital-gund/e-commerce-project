import './App.css';
import { Navbar } from './component/layout/header/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './component/pages/Home';
import Shop from './component/pages/Shop';
import Featured from './component/pages/Featured';
import Recommended from './component/pages/Recommended'
import Footer from './component/layout/Footer/Footer';
import Top_content from './component/layout/Body/Top_content';
import Featured_product from './component/layout/Body/Featured_product';
import Recommended_product from './component/layout/Body/Recommended_product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/pages/Header';
// import Addcart from './component/pages/Addcart';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
   <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/Header' exact element={<Shop/>}/>
    <Route path='/Featured' exact element={<Featured/>}/>
    <Route path='/Recommended' exact element={<Recommended/>}/>
    </Routes>
    <Header/>
    {/* <Top_content/> */}
    {/* <Featured_product/> */}
    {/* <Recommended_product/> */}
    <Shop />
    {/* <Addcart/> */}
    <Footer/>
    </Router>
    
    </>      
  );
}

export default App;
