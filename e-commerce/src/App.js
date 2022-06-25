import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Home from './theme-layout/Home/Home'
import Shop from "./theme-layout/Shop/Shop";
import Featured from "./theme-layout/Featured/Featured";
import Recommended from "./theme-layout/Recommended/Recommended";
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
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/featured" element={<Featured/>} />
      <Route exact path="/recommended" element={<Recommended/>} />
      {/* <Route exact path="/contact" element={<Home />} /> */}
      {/* <Route path='*' element={<Current />} /> */}
    </Routes>
  </>
  );
}

export default App;