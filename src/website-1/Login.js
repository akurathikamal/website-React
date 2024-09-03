import React from "react";
import {Link,useNavigate} from "react-router-dom";
import "./Login.css";
export default function Login(){
    return(
        <>
        <div class="body-login">
        <div class="login-container">
        <header>
            <h1 id="h11">TravelVista</h1>
            <p>Discover your next adventure</p>
        </header>
        <div class="login-form">
            <h2>Login</h2>
            <form action="#" method="post">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" required style={{marginLeft:"20px"}}></input>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required style={{marginLeft:"20px"}}></input>
                <Link to="/" style={{textDecoration:"none"}}>
                <button type="submit" style={{marginLeft:"0px"}}>Login</button></Link>
            </form>
            <Link to="/Register" style={{textDecoration:"none"}}>
            <p class="signup-link">Don't have an account? <a>Sign up</a></p>
            </Link>
        </div>
    </div>
    </div>
        </>
    )
}