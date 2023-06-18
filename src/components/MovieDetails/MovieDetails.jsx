import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function MovieDetails() {

    const history = useHistory()
    const dispatch = useDispatch();
    const moviedetail = useSelector(store => store.moviedetails);

    const genre = useSelector(store => store.moviegenres)
    console.log(moviedetail);

    console.log(genre);


    // pass the Movie ID to the sags with the type FETCH_MOVIE_GENRE
    useEffect( () => {
        dispatch( { type: 'FETCH_MOVIE_GENRE', payload: moviedetail.id})
    }, [])


    const handleclick = () => {
        history.push('/')
    }
    return (
        <>
            <button onClick={handleclick}>Back to Movie List</button>
            <div>
                <h3>Moive Genres</h3>
                {genre.map(genre => (
                    <p>{genre.name}</p>
                ))}
                <h3>{moviedetail.title}</h3>
                <img src={moviedetail.poster}></img>
                <p>{moviedetail.description}</p>
            </div>
        </>
    )
}

export default MovieDetails