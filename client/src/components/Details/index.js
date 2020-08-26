import React from 'react'
import './style.css'


export default function Details(props) {
    return (
        <>
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
                        target="_blank"
                        className="btn mx-1"
                        href={props.link}
                    >VIEW</a>
                </div>

            </div>

            <div className="media row mx-2 py-4">
                <img src={props.thumbnail} className="mr-3" alt={props.title} />
                <div className="media-body">
                    <p>{props.description}</p>
                </div>
            </div>

        </>
    )
}

