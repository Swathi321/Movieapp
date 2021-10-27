const express = require('express');
const movieController = require('../controllers/movies');
const authentication = require('../middlewares/authentication/validateToken')

const router = express.Router();


router
    .route('/movies')
    .get(authentication.verifyToken, movieController.getMovies);



module.exports = router;
