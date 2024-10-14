import React, {useState, useEffect} from "react";  


const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("http://localhost:8080/app/v1/movies")
        .then(response => {
            if(!response.ok) {
                throw new Error("Network was not ok")
            }
            return response.json();
        })
        .then(movies => {
            setMovies(movies)
            setLoading(false)
        })
        .catch(error => {
            console.error("Error: ", error)
        })

    }, [])


    return (
        <div className="container">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
                {movies.map(movie => {
                    return (
                        <div className="col">
                            <div key={"mykey" + movie.id} className="card h-100">
                                <img src={movie.imagePath} className="card-img-top h-100" alt="..."/>
                                <div className="card-body"> 
                                    <p className="card-text">{movie.budget}</p>
                                </div>
                            </div>  
                        </div>
                    )
                })}
            </div>

        </div>


    )
}


export default Movies;