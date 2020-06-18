import React from 'react'
import './style.css'

export default function Details(props) {
    return (
        <div className="book-details container">
            <div className="row">
                <div className="col-md">
                    <div>
                        <a href={props.link}><h3>{props.title}</h3></a>

                        <h4>Writen by: {props.authors}</h4>
                    </div>
                </div>
                <div className="col-md">
                    <button type="button" className="btn btn-info">VIEW</button>
                    <button type="button" className="btn btn-info">SAVE</button>
                </div>

            </div>

            <div className="media row">
                <img src={props.image} className="mr-3" alt={props.name} />
                <div className="media-body">
                    <p>{props.description}</p>
                </div>
            </div>

        </div>
    )
}

