// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Celebrity = require('../models/Celebrity.model')

//Get celebrities

router.get('/', (req, res, next) => {
    res.render('celebrities/celebrities')
})

//Render the view for creating a celebrity
router.get('/create', (req, res, next) => {
    res.render('celebrities/new-celebrity')
})

//Create the POST Method
router.post('/create', async (req, res) => {
    try {
      await Celebrity.create({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
      })
      res.redirect('/celebrities')  
    } catch (error) {
        console.log(error)
        res.render('celebrities/new-celebrity')
    }
})

module.exports = router