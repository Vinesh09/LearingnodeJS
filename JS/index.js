// let countElement = document.getElementById("count")
// console.log(countElement)
// let count = 0

// function increment() {
//     count++
//     countElement.textContent = count
//     console.log("clicked")
// }

// let saveEnteries = document.getElementById("enteries")
// console.log(saveEnteries)

// function _save() {
//     let countStr = count + "-"
//     saveEnteries.textContent += countStr
//     countElement.textContent = 0
//     count = 0

// }

// let num1 = 5
// let num2 = 20

// document.getElementById("num1").textContent = num1
// document.getElementById("num2").textContent = num2
// let total = document.getElementById("total")

// function add() {
//     total.textContent = 0
//     total.textContent = num1 + num2
// }

// function multiply() {

//     total.textContent = num1 * num2
// }

// function divide() {


//     total.textContent = num1 / num2
// }

// function sub() {

//     total.textContent = num1 - num2
// }


let sum = 0
let cards = []
let message = ""
let hasblackjack = false
let isAlive = false

let msgEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum")
let cardEl = document.getElementById("cards")

function generateRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

}

function startgame() {
    isAlive = true
    let firstCard = generateRandomCard()
    let secondCard = generateRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    rendergame()
}

function rendergame() {
    cardEl.textContent = "Card: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else
    if (sum === 21) {
        message = "You've got a Blackjack! 🎉🎉"
        hasblackjack = true
    } else {
        message = "You out of  the game !"
        isAlive = false
    }
    msgEl.textContent = message
}

function newcard() {
    if (isAlive === true && hasblackjack === false) {
        let thirdcard = generateRandomCard()
        sum += thirdcard
        cards.push(thirdcard)
        rendergame()
    }
}

// Math.random() = give value between 0 to 0.99999.....
// Math.random () *6 == return 0 to 5.999....
// Math.floor()  return int value from float/decimal value



// let randomNumber = Math.random()
// console.log(randomNumber * 13)


// flooringNumber = Math.floor(randomNumber * 6)
// console.log(flooringNumber)

l = ["a", "b", "c", "d", "e"]

// l.pop() remove one at the end  
// l.push("p") add one at the end
// l.shift() remove from beginning
// l.unshift("h") add at  the beginning
console.log(l)

// const randomString = Math.random().toString(36);
// console.log(randomString)
let lead = []
let inputBtn = document.getElementById("input-btn")
let inputval = document.getElementById("input-val")
const ulList = document.getElementById("ul-ls")
console.log(inputBtn, inputval, ulList)

inputBtn.addEventListener("click", function() {
        console.log("herle")
        lead.push(inputval.value)
            // console.log(lead)
        renderlist()
        inputval.value = " "
    })
    // let listitem = " "

function renderlist() {
    let listitem = ""
    for (let i = 0; i < lead.length; i++) {
        listitem += `<li> ${lead[i]} </li>`
    }
    ulList.innerHTML = listitem

}

// inputBtn.onclick = function() {
//     console.log("kkk", inputval.value)
//     document.getElementById("label").textContent = inputval.value
//   }

// Math.ceil round off value 
// Math.pow >> is power  
// Math.sqrt >> square root
// Math.abs >> give postive Number
// Math.max >> give the maximum value
// Math.min  >>> give minimum value
// Math.PI  > return the math pi value

let x = -8.00044
    // x = Math.ceil(x) // Math.ceil round off value 
    // x = Math.pow(2, 4)
    // x = Math.sqrt(x)
    // x = Math.abs(x) \\\\\\\\
console.log(x)
    // let label = document.getElementById("label")
    // document.getElementById("dec").onclick = function() {
    //     // 1st-way
    //     label.textContent--
    //     // 2nd way
    //     let j = Number(label.textContent)
    //     label.textContent = j -= 2
    // }
    // document.getElementById("re").onclick = function() {
    //     // label.textContent = 0
    // }
    // document.getElementById("inc").onclick = function() {
    //     // 1st way
    //     label.textContent++
    //     // 2nd way
    //     let j = Number(label.textContent)
    //     label.textContent = j += 2
    // }


// while loop:
// while(condition){

//  }

// do while: >> first do  something then check condition,repeat it if not true 
// do{

// }while(condition)

// for loop:

// a = window.prompt("enter something to see magic ")
// console.log(a)


// var must used inside in function {} (if we use outside this it will change/override the property of window object variable )

// let can be used inside scope (means forloop(let i=0)) and it can we used as a gloably it will not chnage/override anything)


// FormatCurrency:
// toLocaleString(locale, { options })
// locale :- specify any language (en-US,hi-IN) etc. (if undefined >> browser will set default one )
// options:= object with formatting opption (style,etc).

// Array: 
// let fruit = ['apple', 'orange', 'banana']
// fruit = fruit.sort().reverse()
// console.log(fruit)
// while (true) {
//     console.log("hlooek")
// }

// for (let i = 0; i >= 0; i++) {
//     console.log(i)
// }
// spread operators: >> used to unpack the elements of an array or string. SO that we can loop over them (iterate over them) >>> using ... in front of araay refernece variable
let n = [2, 4, 5, 6, 7, 8, 8]

document.getElementById("label").textContent = Math.max(...n)

// rest parameters = respresent of indefinite number of parameters  (to pack arguments in single array)>>>>>>>>>>


// let a = 3
// let c = 5
// let d = 4
// let f = 8
// document.getElementById("label").textContent = totalamount(a, c, d, f)

// function totalamount(...numbers) {
//     let total = 0;
//     for (let num1 of numbers) {
//         total += num1
//     }
//     return total
// }


// callback : function pass as a argument and help us to make asyncrons

// ssum(2, 4, callbackfunction);

// function ssum(x, y, dosomething) {
//     let res = x + y
//     dosomething(res)
// }

// function callbackfunction(output) {
//     document.getElementById("label").textContent = output

// }

// Array.forEach : executes a provided callback function once for each array element

students = ['vinesj', 'rahul', 'kunal', ]

console.log(students)
    // students.forEach(element => {
    //     console.log(element)
    // });

// function capitalize(element, index, array) {
//     array[index] = element[0].toUpperCase() + element.substring(1)
// }
// students.forEach(capitalize);
// console.log(students)

// function print(e, index) {
//     console.log(e, index)
// }
// students.forEach(print);

// array.map() ==executes a provided callback function once for each array element and create new array

// let num = [1, 4, 5, 6, 7, 2, 3];

// let result0 = 0 //num.map()
// let result1 = num.map(squareall);
// let result2 = num.map(cubeall)
//     // let result3 = num.map(printall) 

// // result1.forEach(printall);

// // console.log(result0, result1, result2, result3)
// console.log(result0, result1, result2)

// function squareall(element) {
//     return Math.pow(element, 2)
// }

// function cubeall(element) {
//     return Math.pow(element, 3)
// }

// function printall(e) {
//     return document.getElementById("label").textContent = e;
// }


// Array.filter() >>> give new array that pass the some condition
// let age = [12, 41, 25, 46, 7, 2, 3];
// let is_adlut1 = age.filter(adult)
//     // is_adlut1.forEach(print)
// age.forEach((e) => {
//     console.log(e)
// })


// function adult(e) {
//     return e >= 18
// }

// function print(e) {

//     console.log(e)
// }
// console.log(is_adlut1)

// Array.reduce =>> reduces an array to a single value

// let nu = [10, 35, 74, 33]
// let totalww = nu.reduce(checkout)
// console.log(totalww)

// function checkout(t, e) {
//     return t + e;
// }
// let t = nu.reduce((t, e) => {
//     return t + e
// })
// console.log(t)

// array.sort()>>>
let grade = [100, 40, 30, 20, 50, 90]
let d = []
let d2 = []

// grade1 = grade.sort(descendingSort);
// console.log(grade1)

// grade2 = grade.sort(AscendingSort);

// function descendingSort(x, y) {
//     console.log(y - x, "-----", y, x)
//     d.push(y - x)
//     return y - x;
// }

// function AscendingSort(x, y) {
//     console.log(x - y)
//     d2.push(x - y)
//     return x - y;
// }

// console.log(d)
// console.log(d2)
// console.log(grade.sort())

// Map  >> object that holds key-value pairs of any data type
// let store = new Map([
//     ['jean', 20],
//     ['t-shirts', 30],
//     ['underwear', 8]
// ]);

// store.forEach((v, k) => console.log(k, v));



// class 
// class Students_ {

// constructor >==a special method of a class , it accepts arguments and assign properties

// this >> is use to access object's own properties

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// object >> am instance of a class 
// const obj1 = new Students_("vijay", 77)
// const obj2 = new Students_("Ritesh", 27)

// console.log(obj2.name) //ato see the name of obj2 name

// static >> belongs to the class and availble for all objects ,  
//properties: usefull for caches , fixed-configuration,
// method: useful for utility functions

// class Car {
//     static numberOfCar = 0
//     constructor(name, age) {
//         this.name = name;
//         this.year = year;
//         Car.numberOfCar += 1
//     }
//     static startRace() {
//         console.log("3...2...1...Go >>> ")
//     }
// }

// // to access the static varible 
// Car.startRace();


// Inheritance >>>  a child class can inherit all the methods and properties from parent class
// class Animal {
//     // something ....
// }
// class Rabbit extends Animal{
//     // something ....
// }

// super = Reference to parent class, commly use for invoke parent class constructor

// class Animal {
//     constructor(var1, var2) {
//         this.var1 = var1;
//         this.var2 = var2
//     }
// }
// class Rabbit extends Animal {
//     constructor() {
//         super(var1, var2);
//           ...
//           ...
//     }
// }
// getter and setter 
// getter >>>> to binds an object properties to a function when that properties is accessed or want to give extra properties to some varible 
//  _properties >> if any variable starts with  single _ (underscore)  it means that is a "protected" variable 
//  this varibel are having readonly permission

// setter  >> to binds an object properties to a function when that properties is assigned a value
// class Animal {
//     constructor(var1) {
//         this._var1 = var1;
//         
//     }
//     get var1(){
//         return `${this._var1} is super and unique` ;
//     }
// set var1(value){
// if (value > 50) {
//     value = 50;
// }
// else if (value < 0) {
//     value =0
// }
// this._var1 = value
//  }
// }
// let a1 = new Animal ("iii")
// console.log(a1.var1)
// a1.var1 =100


// try catch 
try {

} catch (error) {
    console.log(error)
} finally {

}
// 
// setTimeout 1 second = 1000 millisecond
// setTimeout >> invoke a function after a number of millisecond (it is asyn function)

// function firstmessage() {
//     alert("im 1st message")
// }

// function secondmessage() {
//     alert("im 2nd message")
// }

// function thridmessage() {
//     alert("im 3rd message")
// }

// let t1 = setTimeout(firstmessage, 3000)
// let t2 = setTimeout(secondmessage, 6000)
// let t3 = setTimeout(thridmessage, 30000)

// document.getElementById("msgshow").onclick = () => {
//     clearTimeout(t1);
//     clearTimeout(t2);
//     clearTimeout(t3);
//     alert("msg stopped");
// };


// setInterval = invoke a function repeatedly after a number of milliseconds
// it is async fucntioomn

// let count = 0
// let max = window.prompt("count up to what #?")
// max = Number(max)

// const mytimer = setInterval(countUp, 1000)

// function countUp() {
//     count += 1;
//     console.log(count);
//     if (count >= max) {
//         clearInterval(mytimer);
//     }
// }

// date object

let date = new Date()
date = date.toLocaleDateString();
document.getElementById("label").textContent = date;
console.log(date)

// console.time() for start and console.timeEnd()

// Promise

// const promise = new Promise((reslove, reject) => {
//     let  is_fileUpload = false
//     if (is_fileUpload) {
//         reslove("file uploaded");
//     } else {
//         reject("File not uploaded")
//     }
// });

// promise.then(value => console.log(value))
//     .catch(
//         error => console.log(error)
//     )

// 2nd promise
// const promise = new Promise(resolve => {
//     setTimeout(resolve, 5000)
// });
// promise.then(() => console.log("thanks"));

// const promise3 = time => new Promise((resolve, reject) => {
//     setTimeout(resolve, time)
// });
// promise3(10000).then(() => console.log("thanks"));



// async = make a function return a Promise
// async function loadfile(data) {
//     let fileLoaded = data;
//     if (fileLoaded) {
//         return "File upload";
//     } else {
//         throw "File Not Loaded";
//     }
// }

// loadfile(true).then((value) => console.log(value))
//     .catch((error) => console.log(error))

// await > makes an async function wait for a promise
// async function loaddata() {
//     try {
//         let msg = await loadfile(true);
//         console.log(msg)
//     } catch (error) {
//         console.log(error)
//     }
// }

// let de = loaddata();
// console.log(de)

//ES6 module

// Dom= Document object model (API) An Interface for changing the content of 
// page
let c = document.querySelector("[for")
console.log(c)

// DOM traversal

// // first child of body
// let bodyelement = document.body;
// let bodychild = bodyelement.firstElementChild;

// let bodychild = bodyelement.lastElementChild;
// console.log(bodychild)
// bodychild.style.backgroundColor = "lightgreen";

// parentElement
// let elementbyid = document.querySelector("#veg");
// let parent = elementbyid.parentElement;
// console.log(parent)
// parent.style.backgroundColor = "lightgreen";

// sibiling of any id or elemmt
// let elmentsbiling = document.querySelector("#fruits");
// let sibiling = elmentsbiling.nextElementSibling;
// let sibiling = elmentsbiling.previousElementSibling;
// sibiling.style.backgroundColor = "lightgreen"
// child of elmenmt================================
let anyelemnt = document.querySelector("#fruits");
let elchild = anyelemnt.firstElementChild;
// let elchild = anyelemnt.lastElementChild;

elchild.style.backgroundColor = "lightgreen"
let elchildern = Array.from(anyelemnt.children);
// elchildern.forEach(function(e) {
//         console.log(e)
//     })
// lllllll
// elchildern.forEach(e =>
//     console.log(e))

// for (const el of elchildern) {
//     el.style.backgroundColor = "lightgreen"
// }
// console.log(elchildern)Color = "lightgreen"
// }
// console.log(elchildern)


// event

// getting index of radio button
let dd = ""
let rbtn = document.getElementsByName("fav_language")
console.log(rbtn)
for (k of document.getElementsByName("fav_language")) {
    if (k.checked) {
        dd = k.value + "oll"

    }
}
console.log(dd)