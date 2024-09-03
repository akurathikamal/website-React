import { Link } from "react-router-dom";
import './Navbar.css';


export default function Navbar(){
    return(
        <>
         <div className="header">
        <div><Link to="/" style={{textDecoration:"none"}}><h2>TN Tourism</h2></Link></div>
        <ul className="headli">

            <Link to="/" style={{textDecoration:"none"}}><li>Home</li></Link>
            <Link to="/Store" style={{textDecoration:"none"}}><li>Service</li></Link>
            <Link to="/Packages" style={{textDecoration:"none"}}><li>Product</li></Link>
            <Link to="/Contact" style={{textDecoration:"none"}}><li>Contact Us</li></Link>
           
            
            <Link to="/Guide" style={{textDecoration:"none"}}><li>About</li> </Link>
            <Link to="/Login" style={{textDecoration:"none"}}> <button>Login</button></Link>
       
        </ul>
    </div>
        </>
    )
}