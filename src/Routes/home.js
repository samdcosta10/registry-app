import React from "react";
import { Link } from "react-router-dom";

export default function home(){
    return(
        <div>
            <h1>Welcome to home</h1>
            <Link to="/registry">Go to Registry</Link>
        </div>
    )
}