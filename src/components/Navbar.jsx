import React from "react";
import logoImage from "../images/Screenshot_2023-06-19_at_12.26.00-removebg-preview.png";
import "../App.css"
import { Outlet, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";

const Navbar = () =>{
    return(
        <nav>
            <div className="logo">
                <Link to={`/`}>
                    <img src={logoImage} alt="" />
                </Link>     
            </div>
            <div className="menu">
                <ul>
                    <li>Movies</li>
                    <li>Series</li>
                    <li>Genre</li>
                    <li>Year</li>
                    <li className="searchBar">
                        <i class="fa fa-search" aria-hidden="true"></i> <input type="text" placeholder="Search..."/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar