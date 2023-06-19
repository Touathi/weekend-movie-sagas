import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './MovieList.css'

// IMPORT CARD REQUIREMENTS
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



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
                        <Card>
                            <div id='movieCard' key={movie.id} >
                                <h3>{movie.title}</h3>
                                <Link to='/moviedetails'>
                                <img src={movie.poster} 
                                    alt={movie.title}
                                    onClick={() => handleClick(movie)} />
                                </Link>
                            </div>    
                        </Card>    
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;