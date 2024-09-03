
import Home from "./website-1/Home"
import Register from "./website-1/Register";
import Login from "./website-1/Login";
import { Route,Routes,Navigate } from "react-router-dom";
import TouristPackages from "./website-1/TouristPackages";
import StoreList from "./website-1/StoreList";
import Guide from "./website-1/Guide";
import Contact from "./website-1/ContactUs";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="*" Navigate={<Home/>} />
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Packages" element={<TouristPackages/>}/>
      <Route path="/Store" element={<StoreList/>}/>
      <Route path="/Guide" element={<Guide/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
