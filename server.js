const express = require('express')

const path = require('path')
// import the routes in routes/index.js
const indexRouter = require('./roots/index')

const app = express() // set up the app

// locate the client/dist directory, tell Express to serve the contents as static files
const staticFilePath = path.join(__dirname, 'client', 'dist')
const staticFiles = express.static(staticFilePath)
app.use('/', staticFiles)

app.use('/', indexRouter) // everything sent to index router to be handled

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port ', server.address().port)
})