//create the express server
const express = require('express');
//create an application
const app = express();
// if we want the middleware to be used everywhere, we use it at the top
//so it is middleware for each particular route/function, so before each route functionality begin returned, the logger function which is the middleware will be executed 
//app.use(logger)
//tell the app to use the ejs view engine
app.set('view engine', 'ejs')

//were going to make it listen on port 3000
app.listen(3003)


//basic routing

//making a get request
//first parameter will be the path
//second parameter will be a function that takes 2 different parameters
//first paramter of the function is the request, second parameter is the response
//if we want a particular middleware, this case a logger, to be used only for a certain function/route, we pass it in after the url
//we can have any amounts of middleware
app.get('/', logger, logger, logger, (req, res) => {
    //this code below will be eexecuted
    console.log("hello")
    //we can set the response
    //the send method will send out whatever we put in the method
    // res.send("Hi")

    //we could send a status code
    //res.sendStatus(500);
    //we can also send a message with the status code
    //res.status(500).send('error')
    //could send a json
    //can also send in a file we want a file to download
    //inside the function put to the path to the file
    // res.download("server.js")

    //we could also render an html page/file
    //we can pass in information from the server into the view
    //this would be the second parameter in the render function

    res.render('index', {myText: 'Country'});
});


    //now let us configure the users router
    //import the users router
    //the parameter in the require function is the path of the routes file
    const userRouter = require('./routes/users')

    //link the route with the router
    app.use('/users', userRouter);

//example of middleware is a logger function
//this will be printing out the url
function logger(req, res, next) {
    console.log(req.originalUrl)
    //also if this logger is only defined for a certain function,
    //it will first execute logger functionality then it will what the function says to do
    //this happens because of the line below, the next() function
    next()
}
