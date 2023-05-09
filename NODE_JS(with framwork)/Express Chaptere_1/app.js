console.log("hello world")
const express = require('express')
const app = express()
const path = require("path")
const hbs = require("hbs")
const requests = require("requests")


// to get path of any folder 
// console.log(path.join(__dirname, '../'))

// to host static website  we need inbuilt middle ware to host static website 
// For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:app.use(express.static('public'))

// const folderPath = path.join(__dirname, '../')
// app.use(express.static(folderPath))


//   to make dynamic web we use template engine 
const tempPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

app.set('view engine', 'hbs'); // <viwe engine> , <name of the template engine name>
// to set template dictory as views // app.set("views", "templates")
app.set('views', tempPath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
    res.render("index", { name: "sja" });
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/helloworld', (req, res) => {
    res.send('hello world')
})


// passing/getting query param
app.get("/city-temperature/", (req, res) => {
    const cityName = req.query['name']
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0cfbb9c20e8ea99af46dc2576f912333&units=metric`)

    .on("data", (item) => {
            const data = JSON.parse(item);
            const output = `Today Temperature of ${data.name} is ${Math.round(data.main.temp)} and the Weather is ${data.weather[0].main}(${data.weather[0].description}) `
            res.send(`<h1>${output}</h1>`);

        })
        .on("end", (err) => {
            if (err) return console.log(err);
            res.end();
        });
});



app.listen(8000, "127.0.0.1")