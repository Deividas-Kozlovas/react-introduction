import React from "react";
import More from "../more/More";
import Login from "../login/Login";
import "./Header.scss";

export default function Header(){
    return(
        <header>
           <More /> 
           <Login />
        </header>
    )
}