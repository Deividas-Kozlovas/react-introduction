import React from "react";
import "./Login.scss";

export default function Login(){
    return(
        <div className="login">
            <div className="login__container">
            <h2 className="login__text">Hello Again!</h2>
            <p className="login__paragraph">Welcome back</p>
            <form>
                <input type="email" placeholder="Email Address"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Login</button>
                <span><a href="#">Forgot Password</a></span>
            </form>
            </div>
        </div>
    )
}