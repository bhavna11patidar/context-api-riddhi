import React, {useContext} from 'react'
import {moviesConsumer} from './ContextMovies'; 
export default function MoviesList() { 
    const [movies, setMovies]=useContext(moviesConsumer);
    return (
        <div className="container my-5">
           <h1 className="text-center text-primary">Movies</h1>
           <div className="row">
               {movies.map((d)=>(
                <div className="col-md-4" key={d.id}>
                     <div className="mt-3 card p-3">
                    <h3>Title: {d.title}</h3>
                    <p>Price: {d.price}</p>
                    <p>Id: {d.id}</p>
                </div>
                </div>
                ))}
           </div>
        </div>
    )
}
