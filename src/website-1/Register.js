import React from "react";
import {Link} from "react-router-dom";
import "./Register.css"
export default function Register(){
    return(
        <>
        <div class="body-register">
        <div class="register-container">
        <header>
            <h1 id="h1">TravelVista</h1>
            <p>Discover your next adventure</p>
        </header>
        <div class="register-form">
            <h2>Register</h2>
            <form action="#" method="post">
                <label for="name">Full Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required></input>
                
                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required></input>
                
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required></input>
                
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required></input>
                
                <label for="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required></input>
                <Link to="/Login" style={{textDecoration:"none"}}>
                <button type="submit" style={{marginLeft:"0px"}}>Sign Up</button>
                </Link>
            </form>
            <Link to="/Login" style={{textDecoration:"none"}}>
            <p class="login-link">Already have an account? <a href="#">Login</a></p>
            </Link>
        </div>
        </div>
        </div>
        </>
    )
}