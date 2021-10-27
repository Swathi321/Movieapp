const express = require('express');

const movieRouter = require('./routes/moviesRouter');

const app = express();

app.use(express.json());


// // 3) ROUTES
app.use('/api/v1', movieRouter);

module.exports = app;
