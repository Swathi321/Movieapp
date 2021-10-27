const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({

    backdrop: { type: String },
    cast: [
        { type: String }
    ],
    classification: { type: String },
    diidrector: { type: String },

    genres: [
        { type: String }
    ],
    id: { type: String },
    imdb_rating: { type: Number },
    length: { type: String },
    overview: { type: String },
    poster: { type: String },
    released_on: { type: String },
    slug: { type: String },
    title: { type: String },
})


module.exports = mongoose.model('movie', movieSchema);
