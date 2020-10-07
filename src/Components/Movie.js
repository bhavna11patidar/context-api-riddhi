import React, {useContext} from 'react';
import {moviesConsumer} from './ContextMovies';
export default function Movie(props) {
    const [movies, setMovies]=useContext(moviesConsumer);
    const deleteMovie=(id)=>{
       /* let filteredMovies=movies.filter((d, i)=>{
            return d.id!==id;
        })
        */
        setMovies({type:"DELETE_MOVIES",payload:id});
    }
    return (
        <div className="col-md-4" key={props.d.id}>
             <div className="mt-3 card p-3">
                <h3>Title: {props.d.title}</h3>
                <p>Price: {props.d.price}</p>
                <p>Id: {props.d.id}</p>
                <button className="btn btn-danger" onClick={()=>deleteMovie(props.d.id)}>Delete</button>
                </div>
        </div>
    )
}
 