import React, {useState, createContext, useReducer} from 'react'
import axios from 'axios';
export const moviesConsumer=createContext();


const reducer=(movies, action)=>{
    switch(action.type){
        case "ADD_MOVIES":
           return [...movies, action.payload];
        case "DELETE_MOVIES":
            return movies.filter((d)=>{return d.id!==action.payload})
        default:
            return movies
    }
}

export function MoviesProvider(props) {
    const intialMovies=[
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
       
    ];
   // const [movies, setMovies]=useState(intialMovies);

   var initialTask=[];
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
        console.log(res.data);
        initialTask=res.data;
    })
    .catch(err=>{console.log(err)});
   const [movies, setMovies]=useReducer(reducer,intialMovies);
    return (
        <moviesConsumer.Provider value={[movies, setMovies]}>
            {props.children}
        </moviesConsumer.Provider>
    )
}
