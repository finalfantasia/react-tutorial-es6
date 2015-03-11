'use strict'

const connect = require ('connect')
const http = require ('http')
const serveStatic = require ('serve-static')
const requestBodyParser = require ('body-parser')

const store = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment."}
]

const app = connect ()

app.use (serveStatic ('public', {index: 'index.html'}))
app.use (requestBodyParser.json ())

app.use ('/comments.json', function (request, response, next) {
    response.setHeader ('Content-Type', 'application/json; charset=utf-8')

    switch (request.method) {
        case 'GET': {
            response.end (JSON.stringify (store), 'utf-8')

            break
        }
        case 'POST': {
            const newComment = {
                id: store.length + 1,
                author: request.body.author,
                text: request.body.text
            }

            store.push (newComment)
            response.end (JSON.stringify (newComment), 'utf-8')

            break
        }
    }

    next ()
})

app.use (function (request, response) {
    response.end ('This is the ES6 (2015) version of the official React Tutorial! Nothing is configured for this URI.\n')
})

const httpServerOptions = {
    host: 'localhost',
    port: 3000
}

http.createServer (app).listen (httpServerOptions, function () {
    console.log (`HTTP server listening on ${httpServerOptions.host}:${httpServerOptions.port}...`)
})

