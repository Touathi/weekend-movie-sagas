import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './MovieList.css'


function MovieList() {

    const dispatch = useDispatch()
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);
"git "
    const handleClick = (movie) => {
        console.log(movie);
        dispatch( { type: 'SET_MOVIE_DETAILS', payload: movie})
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <Link to='/moviedetails'>
                            <img src={movie.poster} 
                                alt={movie.title}
                                onClick={() => handleClick(movie)} />
                            </Link>
                            
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;