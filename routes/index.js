var express = require('express');
var router = express.Router();
require('dotenv').config();
const fetch = require("node-fetch");

// const api ='d02976d6d55fc19e08f4b2d2c2c65254'

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`)
      .then(response => response.json())
      .then(data => {
        
        res.json({movies: data.results} );
      });
   });


module.exports = router;
