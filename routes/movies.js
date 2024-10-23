var express = require('express');
var router = express.Router();
require('dotenv').config();
const fetch = require("node-fetch");

const API_KEY = process.env.API_KEY;

router.get('/', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        
        res.json({movies: data.results} );
      });
   });


module.exports = router;