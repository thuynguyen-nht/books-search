import React from 'react'
// import "./style.css"

export function SearchBtn(props) {
    return (
        <button onClick={props.searchBooks} type="submit" id="submit-search" className="btn btn-primary col-2">Search for Books</button>
    )
}

export function RemoveBookBtn(props) {
    return (
        <button onClick={props.searchBooks} type="danger" id="submit-search" tabIndex="0" className="btn delete-btn" {...props}>Delete</button>

    );
}
