const Movie = require('../models/movie');


exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.aggregate([{ $unwind: "$genres" }, {
            $group: {
                _id: "$genres",
                'genres': {
                    '$first': '$genres'
                },
                Movies: {
                    $push: { director: '$director', imdb_rating: '$imdb_rating', length: '$length', poster: '$poster', title: '$title' }
                }

            }
        }, { $unset: "_id" }]);
        res.status(200).json({
            status: 'success',
            data: movies
        });
    } catch (err) {
        console.log(err, 'err')
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};