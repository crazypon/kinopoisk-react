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
            
            console.log(currentMovie);
        })
        .catch( error => {
            console.log("Error: " + error)
        })

    }, [])
    
    return (
        <div className="row">
            {loading ? (
                <h1>Loading...</h1>
            ) : (
            <>
                <h3 className="movieTitle">{currentMovie.title}</h3>
                <div className="col col-lg-4 col-md-6 col-sm-12">
                    <img src={"/" + currentMovie.imagePath} className="img-fluid" alt="movie poster" />
                </div>
                <div className="col col-lg-8 col-md-6 col-sm-12">
                    <p>Budget: {currentMovie.budget}</p>
                    <p>Starring: {currentMovie.mainCharacter}</p>
                    <p>Film Director: {currentMovie.filmDirector}</p>
                    <p>Genre: {currentMovie.genre}</p>

                    <div className="ratings">
                        <p>IMDB: {currentMovie.imdbrating} </p>
                        <p>RT: {currentMovie.rottenTomatoes}</p>
                        <p>KP: {currentMovie.localRating}</p>
                    </div>

                    <br />

                    <div className="movieButtons">
                        <button className="btn btn-primary">watch later</button>
                        <button className="btn btn-primary">rate</button>     
                    </div>

                    <br />
                    <br />

                    <h4>Description</h4>
                    <p>{currentMovie.movieDescription}</p>
                </div>
                <div className="col col-lg-12 col-sm-12 col-md-12">
                    <h4>Comments</h4>
                    {currentMovie.comments.map(comment => {
                        return (
                            <p>{comment.content}</p>
                        )
                    })}
                </div>
            </>
            )}

        </div>
    )
}

export default MovieDescription;