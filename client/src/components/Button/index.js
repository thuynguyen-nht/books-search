import React from 'react'
// import "./style.css"

export default function SearchBox(props) {
    return (
        <button onClick={props.searchBooks} type="submit" id="submit-search" className="btn btn-primary col-2">Search for Books</button>
    )
}