const Movies = require("./movieDB");

exports.listMovies = (req, res) => {

    Movies.find()

    .then(response => {
        res.status(200).json({
            message : "Movies list retrieved sucessfully",
            movies : response
        })
    })

    .catch(err => {
        error: err
    })
}

exports.listMoviesById = (req, res) => {

    const { id }    = req.params; 
   
    Movies.findById(id)

    .then(response => {
        res.status(200).json({
            message : "Movies list retrieved sucessfully",
            movies : response
        })
    })

    .catch(err => {
        error: err
    })
}