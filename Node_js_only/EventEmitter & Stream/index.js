const EventEmitter = require("events")

const fs = require('fs')
const http = require("http")

const event = new EventEmitter() // creating a object of eventEmitter


// * one event can have many callback *

// declaring the event  callback (always declare the event before it emit or call  )
// sayMyName >> Here we define the function
// 1 example :-
event.on("sayMyName", () => {
    console.log("My name is sayMyName Event that You call me !")
});

// 2 example :-


event.on("sayMyName", () => {
    console.log("My name is sayMyName Event!\nform here i m doing different task")
});

// call(emit) an event 
// here we call the function 
event.emit("sayMyName")

// pass parameter in the event
event.on("checkPassedParameters", (statusCode, msg) => {
    console.log(`I am one of the parmeters value "${statusCode}" \n Carrying msg for you "${msg}" `)
})

// passing values while  we calling the (function) event is called ( event.emit) :-
event.emit("checkPassedParameters", 200, "ok")

// stream data 
// way `1`
// const server = http.createServer((req, res) => {
//     const rstream = fs.createReadStream(`${__dirname}/text.txt`)
//     rstream.on("data", (items) => {
//         res.write(items)
//     })
//     rstream.on("end", () => {
//         res.end()
//     })
//     rstream.on("error", (err) => {
//         console.log(err)
//         res.end("File not found")
//     })
//     console.log(typeof(res))
// })
// server.listen(8000, "127.0.0.1")

// way 2
const server2 = http.createServer();

server2.on("request", (req, res) => {
    const rstream = fs.createReadStream(`${__dirname}/text.txt`)
    rstream.pipe(res)
})

server2.listen(8000, "127.0.0.1")