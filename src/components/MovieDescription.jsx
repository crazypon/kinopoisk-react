import React, { useState, useEffect } from "react";
import  { useParams } from "react-router-dom";


const MovieDescription = () => {

    const {movieId} = useParams(); 
    const [currentMovie, setCurrentMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch('http://localhost:8080/app/v1/movies/' + movieId)
        .then( response => {
            if(!response.ok) {
                throw new Error("Connection was not ok")
            }
            return response.json()
        })
        .then( movie => {
            setCurrentMovie(movie);
            setLoading(false);
        })
        .catch( error => {
            console.log("Error: " + error)
        })

    }, [])

    return (
        loading ? <div>bye</div> : <div>hello</div>
    )
}

export default MovieDescription;