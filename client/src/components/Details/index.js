import React from 'react'
import './style.css'

export default function Details(props) {
    return (
        <div className="book-details container my-3">
            <div className="row pt-3">
                <div className="col-md">
                    <div>
                        <h3>{props.title}</h3>

                        <h4>{props.authors.join(", ")}</h4>
                    </div>
                </div>
                <div className="col-md text-right">
                    <a
                        type="button"
                        className="btn btn-info mx-1"
                        href={props.link}
                    >VIEW</a>
                    <button type="button" className="btn btn-info mx-1" >SAVE</button>
                </div>

            </div>

            <div className="media row mx-2 py-4">
                <img src={props.thumbnail} className="mr-3" alt={props.title} />
                <div className="media-body">
                    <p>{props.description}</p>
                </div>
            </div>

        </div>
    )
}

