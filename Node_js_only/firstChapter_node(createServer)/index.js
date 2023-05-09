// my starting:---
const http = require("http");
const url = require("url");
const fs = require("fs");


const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName)
    output = output.replace(/{%IMAGE%}/g, product.image)
    output = output.replace(/{%QUANTITY%}/g, product.quantity)
    output = output.replace(/{%PRICE%}/g, product.price)
    output = output.replace(/{%ID%}/g, product.id)
    output = output.replace(/{%FROM%}/g, product.from)
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients)
    output = output.replace(/{%DESCRIPTION%}/g, product.description)



    if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, product.organic)
    return output
}


const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const product_data = fs.readFileSync(`${__dirname}/data.json`, "utf-8")
const dataObj = JSON.parse(product_data)

const server = http.createServer((request, response) => {
    // const pathname = request.url
    // console.log(pathname)
    // console.log(url.parse(request.url, true))
    const { query, pathname } = url.parse(request.url, true)


    // OVERVIWE PAGE
    if (pathname === '/' || pathname === "/overview") {
        const cardHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('')
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardHtml)
        response.writeHead(200, ({ 'Content-type': "text/html" }))
        response.end(output)

        // PRODUCT PAGE
    } else if (pathname === "/product") {
        const product_obj = dataObj[query.id]
        const output = replaceTemplate(tempProduct, product_obj)
        response.end(output)

        // API
    } else if (pathname === "/api") {
        response.writeHead(200, { "Content-type": "application/json" })
        response.end(product_data)
            // console.log(__dirname)

        // PAGE   NOT FOUND
    } else {
        response.writeHead(404, {
            "Content-type": "text/html",
            "my-own-header": "hello-world"
        });
        response.end("<h1>page not found</h1>")
    }
})
server.listen(5000, '127.0.0.1', () => {
    console.log("Listening node js server at 127.0.0.1:5000")
})