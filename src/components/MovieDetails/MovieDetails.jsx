import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function MovieDetails() {

    const history = useHistory()
    const dispatch = useDispatch();
    const movies = useSelector(store => store.moviedetails);
    const genre = useSelector(store => store.moviegenres)
    console.log(movies);
    console.log(movies.id);
    console.log(genre);

    useEffect( () => {
        dispatch( { type: 'FETCH_MOVIE_GENRE', payload: movies.id})
    }, [])


    return (
        <>
            <div>
                <p>Movie details</p>
            </div>
        </>
    )
}

export default MovieDetails