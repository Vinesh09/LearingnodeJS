const express = require("express")
const app = express();

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
date = new Date()
const d = weekday[date.getDay()].slice(0, 3)
console.log("hello world", date.getHours(), (date.getHours().toString().length), weekday[date.getDay()], d)
let hours = date.getHours() % 12 || 12
let hour = `${hours}`.length > 1 ? hours : `0${hours}`
let am_pm = date.getHours() >= 12 ? "PM" : "AM"

console.log(hour, am_pm)