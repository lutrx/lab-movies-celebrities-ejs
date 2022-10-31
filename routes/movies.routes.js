// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Movie = require('../models/Movie.model')

// all your routes here


//Render the view for creating a celebrity

router.get('/', (req, res) => {
    res.render('movies/movies')
})

router.get('/create', (req, res, next) => {
    res.render('movies/new-movie')
})

router.post('/create', async (req, res) => {
    try {
        await Movie.create({
            title: req.body.title,
            genre: req.body.genre,
            plot: req.body.plot,
            cast: req.body.celebrityId,
        })
    } catch (error) {
        console.log(error)
    }
})

//Create the POST Method



module.exports = router