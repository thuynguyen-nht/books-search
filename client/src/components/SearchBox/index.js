import React from 'react'
import "./style.css"

export default function SearchBox(props) {
    return (
        <form className="container searchBox">
            <h1>Search Books</h1>
            <hr />
            <div className="form-group">
                <label htmlFor="search-input">Search Books</label>
                <div className="row searhInputBox">
                    <input
                        type="text"
                        className="form-control col-9"
                        id="search-input"
                        aria-describedby="booksSeach"
                        placeholder="Search for Books"
                        name="query"
                        value={props.query}
                        onChange={props.handleInputSubmit}
                    />

                    <button onClick={props.searchBooks} type="submit" id="submit-search" className="btn btn-primary col-2">Search for Books</button>
                </div>
            </div>
        </form>
    )
}