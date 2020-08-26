import React from "react";
import './style.css'

export default function EmptyList() {
    return (
        <div className="container noBook">
            <h1>No Books To Display</h1>
            <h1>Type in the search box to start!</h1>
        </div>
    )
}