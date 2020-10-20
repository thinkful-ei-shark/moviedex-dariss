const express = require('express');
const morgan = require('morgan');

const app = express();
const data = require('moviedata');

app.use(morgan('common')); // let's see what 'common' format looks like

app.get('/', (req, res) => {
  // ALL OUR CODE HERE
});

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});