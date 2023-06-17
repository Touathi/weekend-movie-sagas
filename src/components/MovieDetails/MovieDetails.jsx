import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function MovieDetails() {

      const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const genre = useSelector(store => store.genres)
    console.log(movies);
    console.log(genre);

    return (
        <>
            <div>
                <p>Movie details</p>
            </div>
        </>
    )
}

export default MovieDetails