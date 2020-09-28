import React from 'react'

export default function Movie(props) {
    return (
        <div className="col-md-4" key={props.d.id}>
             <div className="mt-3 card p-3">
                <h3>Title: {props.d.title}</h3>
                <p>Price: {props.d.price}</p>
                <p>Id: {props.d.id}</p>
            </div>
        </div>
    )
}
