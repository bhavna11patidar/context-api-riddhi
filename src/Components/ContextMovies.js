import React, {useState, createContext} from 'react'

export const moviesConsumer=createContext();
export function MoviesProvider(props) {
    const [movies, setMovies]=useState([
        {
            id:1,
            title:"3 Idiots",
            price:"100$",
            
        },
        {
            id:2,
            title:"URI",
            price:"130$",
        },
        {
            id:3,
            title:"znmd",
            price:"150$",
        },
        {
            id:4,
            title:"Special 26",
            price:"100$",
        },
       
    ]);
    return (
        <moviesConsumer.Provider value={[movies, setMovies]}>
            {props.children}
        </moviesConsumer.Provider>
    )
}
