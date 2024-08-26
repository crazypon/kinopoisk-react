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

    console.log(currentMovie);
    
    return (
        <div className="row row-md-2 row-sm-1">
            <h3>{currentMovie.title}</h3>
            <div className="col">
                <img src={currentMovie.imagePath} alt="movie poster" />
                <p>{currentMovie.imagePath}</p>
            </div>
            <div className="col">
                <p>{currentMovie.movieDescription}</p>
            </div>
        </div>
    )
}

export default MovieDescription;