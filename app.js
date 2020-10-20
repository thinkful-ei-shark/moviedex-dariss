require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

console.log(process.env.API_TOKEN);

const app = express();


app.use(morgan('common')); // let's see what 'common' format looks like

const movieData = require('./moviedata.js');

function handleGetMovie(req, res){
  res.json(movieData);
}

app.get('/movie', handleGetMovie); 

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});