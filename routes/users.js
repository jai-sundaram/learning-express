//import express
const express = require('express')
//the stuff we set up in this router will be independent from the main router
const router = express.Router()

//router has the crud functions

//creating two more routes

//these routes, will always start with /users (which will be defined in the main server.js)
//so we can emit the /users part
router.get('/', (req, res) => {
    res.send('User List');
})
//put static routes on top of/before dynamic routes
router.get('/new', (req, res) => {
    res.send('User New');
})
//we could also create users
router.post('/new', (req, res) => {
    res.send('Create user');
})

//acess user based on user's id
//this needs to be dynamic (meaning it can be 1, 2, 3, 4 bc the user id will be different for each person)
router.get('/:id', (req, res) => {
    //furthermore we can also acess the value of a parameter
    res.send(`User Get By Id: ${req.params.id} `);
})

//we can also update a user who has a particular id
router.put('/:id', (req, res) => {
    res.send(`User Update With Id: ${req.params.id}`)
})












//export the router
module.exports = router


