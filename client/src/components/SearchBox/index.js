import React from 'react'
import "./style.css"


export default function SearchBox(props) {
    return (
        <div className="row searhInputBox">
            <input
                type="text"
                className="form-control col-9"
                id="search-input"
                aria-describedby="booksSeach"
                placeholder="Search for Books"
                name="query"
                value={props.query}
                onChange={props.handleInputChange}
            />
        </div>


    )
}