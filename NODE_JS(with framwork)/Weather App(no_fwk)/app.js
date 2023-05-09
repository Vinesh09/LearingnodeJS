'use strict';
var requests = require('requests');
const http = require("http")
const fs = require("fs")

const weatherHtml = fs.readFileSync(`${__dirname}/index.html`, "utf-8")
const replaceTemplate = (template, data) => {
    let temp = template.replace("{%location%}", data.name)
    temp = temp.replace("{%country%}", data.sys.country)
    temp = temp.replace("{%tempval%}", data.main.temp)
    temp = temp.replace("{%tempmin%}", data.main.temp_min)
    temp = temp.replace("{%tempmax%}", data.main.temp_max)
    temp = temp.replace("{%tempstatus%}", data.weather[0].main)
    return temp
}

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        requests('https://api.openweathermap.org/data/2.5/weather?q=pune&appid=0cfbb9c20e8ea99af46dc2576f912333')

        .on("data", (item) => {
            const data = [JSON.parse(item)]
            const output = data.map(elment => replaceTemplate(weatherHtml, elment)).join('')

            res.write(output)
        })

        .on("end", (err) => {
            if (err) return console.log('connection closed due to errors', err);
            // console.log("data not found")
            res.end()
        })
    } else {
        res.end("page not found")
    }

});

server.listen(8000, "127.0.0.1")