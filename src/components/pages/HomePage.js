import React from "react";
import Navbar from "../Navbar";
import Container from "../Container";
import "../../App.css";
import FetchData from '../../utils/fetch';
import ContextComponent from "../ContextComponent";

const HomePage = () => {
    return (
        <div className="wrapper">
            <Navbar />
            <Container/>
        </div>
    )
}

export default HomePage;
