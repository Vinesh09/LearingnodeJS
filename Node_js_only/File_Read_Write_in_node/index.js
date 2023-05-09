// reading and write file
const fs = require("fs")

// this is scynchronnic way:
const a = fs.readFileSync('h.txt', 'utf-8');
console.log(a)

const b = `this is what we know about the avocado:${a}.\ncreated on ${Date.now()}`
const c = fs.writeFileSync('h1.txt', b)
console.log(c)


// non-blocking and Asynchronic way of reading and writing
fs.readFile('h.txt', 'utf-8', (err, data) => {
    if (err) return console.log("erro");
    fs.readFile(`${data}.txt`, 'utf-8', (err, data1) => {
        fs.readFile('h2.txt', 'utf-8', (err, data2) => {
            fs.writeFile('h3.txt', `${data},${data1},${data2}`, 'utf-8', err => {
                if (err) throw err
                console.log("fffffffffff")
                    // console.log(err, data2, data1, data);
            })
        })
    })
});