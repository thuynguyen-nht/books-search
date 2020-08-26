import React from "react";
import jumbotronImage from '../../image/jumbotronImage.jpg'
import './style.css'

function Jumbotron() {
    return (
        <div
            style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
            className="jumbotron jumbotron-fluid container"
        >
            <h1 className="display-4">(React) Google Books Search</h1>
            <p className="lead">Search for and Save Books of Interest</p>
        </div>
    );
}

export default Jumbotron;
