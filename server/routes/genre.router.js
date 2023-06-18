const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const query = `SELECT * FROM "genres";`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })
});

router.get('/:id', (req, res) => {
  console.log(req.body);
  console.log(req.params.id);

  // GETTING THE GENRE NAMES THAT MATCHES THE MOVIE ID THAT WAS SELECTED
  const queryText =`
    SELECT "name" FROM "genres"
    JOIN "movies_genres" ON "movies_genres"."genre_id" = "genres"."id"
    JOIN "movies" ON "movies"."id" = "movies_genres"."movie_id"
    WHERE "movies"."id" = $1;
  `;
  const getGenresFromId = req.params.id
  pool.query(queryText, [getGenresFromId] )
    .then( result => {
      console.log(result);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })
});




module.exports = router;