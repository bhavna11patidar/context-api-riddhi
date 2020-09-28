import React, {useContext} from 'react'
import {moviesConsumer} from './ContextMovies'; 
import Movie from './Movie';
export default function MoviesList() { 
    const [movies, setMovies]=useContext(moviesConsumer);
    return (
        <div className="container my-5">
           <h1 className="text-center text-primary">Movies</h1>
           <div className="row">
               {movies.map((d)=>(
                   <Movie d={d} key={d.id}></Movie>
                ))}
           </div>
        </div>
    )
}
