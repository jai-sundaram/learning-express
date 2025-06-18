//import express
const express = require('express')
//the stuff we set up in this router will be independent from the main router
const router = express.Router()

//router has the crud functions

//creating two more routes

//these routes, will always start with /users (which will be defined in the main server.js)
//so we can emit the /users part
// router.get('/', (req, res) => {
//     res.send('User List');
// })
// //put static routes on top of/before dynamic routes
// router.get('/new', (req, res) => {
//     res.send('User New');
// })
// //we could also create users
// router.post('/new', (req, res) => {
//     res.send('Create user');
// })
//
// //acess user based on user's id
// //this needs to be dynamic (meaning it can be 1, 2, 3, 4 bc the user id will be different for each person)
// router.get('/:id', (req, res) => {
//     //furthermore we can also acess the value of a parameter
//     res.send(`User Get By Id: ${req.params.id} `);
// })
//
// //we can also update a user who has a particular id
// router.put('/:id', (req, res) => {
//     res.send(`User Update With Id: ${req.params.id}`)
// })
//
// //we can also delete a user who has a particular id
//
// router.delete('/:id', (req, res) => {
//     res.send(`User Update With Id: ${req.params.id}`)
// })

//however instead of having the same path, and just specifying a bunch of different crud operations, we can just chain them
router.route("/:id").get((req, res) => {
    //furthermore we can also acess the value of a parameter
    //we are going to printing out the user from below here
    console.log(req.user)
    res.send(`User Get By Id: ${req.params.id} `);
}).put(((req, res) => {
    res.send(`User Update With Id: ${req.params.id}`)
})).delete((req, res) => {
    res.send(`User Update With Id: ${req.params.id}`)
})

//the param function is a type of middleware
//the first parameter specifies which routes should be targeted
//in this case, all routes that are "id" will have this function applied
//in the second parameter, the last parameter in the paranthesis will take the value of the thing
//in this case that is the value of the id
users = [{name: "Kyle"}, {name: "Sally"}]
router.param("id", (req, res, next, id) => {
    console.log(id)
    //for the function to go to the next thing (which in this case would be the actual get/put/delete response, use the next funtion

    //we dont have to necessarily do smthn basic like printing, we could also use it in more complex secnarios
    //we are just making some variable below
    req.user = users[id];
    next()
})














//export the router
module.exports = router


