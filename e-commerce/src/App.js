import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Home from './theme-layout/Home/Home'
import Shop1 from "./theme-layout/Shop/Shop1";
import Featured from "./theme-layout/Featured/Featured";
import Recommended from "./theme-layout/Recommended/Recommended";
import Basket from "./theme-layout/Basket/Basket";
// import About from './theme-layout/components/about/About'
// import Pricing from './theme-layout/components/pricing/Pricing'
// import Pages from './theme-layout/components/pages/Pages'
// import Blog from './theme-layout/components/blog/Blog'
// import Contact from './theme-layout/components/contact/Contact'
// import Current from "./theme-layout/current/Current";

function App() {
  return (<>
    <Routes>
      <Route exact path="/home" element={<Home />} />
      {/* <Route exact path="/" element = {<Home />} /> */}
      <Route exact path="/shop" element={<Shop1 />} />
      <Route exact path="/featured" element={<Featured />} />
      <Route exact path="/recommended" element={<Recommended />} />
      <Route exact path="/basket" element={<Basket />} />
      <Route path='*' element={<Home />} />
    </Routes>
  </>
  );
}
export default App;