import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './MovieDetails.css'
import Button from '@mui/material/Button';
import BackBtn from '../BackBtn/BackBtn';


function MovieDetails() {

    const history = useHistory()
    const dispatch = useDispatch();
    const moviedetail = useSelector(store => store.moviedetails);

    const genres = useSelector(store => store.moviegenres)
    console.log(moviedetail);

    console.log(genres);


    // pass the Movie ID to the sags with the type FETCH_MOVIE_GENRE
    useEffect( () => {
        dispatch( { type: 'FETCH_MOVIE_GENRE', payload: moviedetail.id})
    }, [])


    const handleclick = () => {
        history.push('/')
    }
    return (
        <>
            <div id='wordcolor'>
                <div>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        id='backBtn' 
                        onClick={handleclick}
                        size='small'>
                            <BackBtn />
                    </Button>
                </div>

                <div id='flexbox'>
                    <div id='genres'>
                        <h3>Moive Genres:</h3>
                        {genres.map((genre, i) => (
                            <p key={i} id='genrebox'>{genre.name}</p>
                        ))}
                    </div>
                    <div id='moviedetails'>
                        <h3>{moviedetail.title}</h3>
                        <img src={moviedetail.poster}></img>
                        <p id='details' >{moviedetail.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetails