// console.log("Hello, World!")
let currentYear = 2021 //number
let currentMonth = "april" //string
let pi = 3.14 //floating point number
// console.log(currentYear)
// console.log(currentMonth)
let a = 2
let b = 4
let c = a + b
// console.log(c)
// console.log(b / a)
// console.log(c*b)

let hundred = 10 ** 2 // 10**0 = 1
// console.log(hundred)   //10**1 = 10
//                         //10**2 = 10*10
// //camelCase
// //under_scored

const greeting = "\"Hello\"" //escaping caracter
console.log(greeting)
// //booleans
// let a = false
// let b = false
// //Or ||
// let f = a || b
// console.log(f)   
// //And &&
// let c = true
// let d = true
// let e = c && d 
// console.log(e)
// let angry = !e
// console.log(angry)
// let firstName = "Baiba"
// let lastName = "Maculska"
let fullName = firstName + " " + lastName
// let fullName = "Baiba Maculska" //string concatenation 
// console.log(fullName)

//defining the function
// function greet(){
//     console.log("Hello, World!")
// }
// //calling the function
// greet()

// function greet(name){ //name is an argument or parameter
//     console.log("Hello, " + name)    
// }
// greet("World!")
// greet("Baiba!")

// function boilEggs() {
//     putWaterBoiling();
//     putEggsIntoWater();
// }

// function putWaterBoiling() {
//     console.log("Water is boiling!");
// }

// function putEggsIntoWater() {
//     console.log("Putting Eggs")
// }

// boilEggs()

// let a = 2 + 3 
// function devide(a, b) {
//     console.log(a * b)
// }
// devide(10, 5)

// let nameObject = {
//     firstName: "Baiba", //key: value
//     lastName: "Maculska",
//     age: 40,
//     fullName : function() {
//         return this.firstName + this.lastName
//     } //method is a function that belongs to an object
// }
// // console.log(nameObject.fullName()) 
// let result = nameObject.fullName()
// console.log(result)


// console.log(nameObject.age)
// let fullName = nameObject.firstName + " " + nameObject.lastName
// // console.log(fullName)
// let fullName = nameObject["firstName"] + " " + nameObject["lastName"]
// console.log(fullName)


//3.lekcija

// let someObject = {
//     firstName: "Some name",
//     lastName: "some name"
// }
//  let firstName = someObject.firstName
//  someObject["lastName"]
//  console.log(firstName)

//  //scope { }
//  //Global scope
//  let number = 5 
//  { 
//      let number = 11
//     number = 6
//         {
//           let number = 123212
//           console.log(number)  
//         }
      
// //  }
//  function multiply (a, b) {
//      let result = a * b
//      return result
//  }
//  let res = multiply(2, 5)
//  console.log(res)

//  function add (a, b, c) {
//          return a + b + c
//  }
//  let result = add(3, 7, 10)
//   console.log(result)
// incrementing 
// p = p + 1
// p +=1
// p ++
// ++p  

// let animal = {
//     name: "good Doggo",
//     color: "white and black",
//     height: 100,
//     pet: function() { //method
//         console.log("the dog feels good when you pet it")
//     },
//     feed: function(food) {
//         console.log("the dog is very much enjoying eating " + food)
//         return true
//     }
// }
// animal.pet()
// let animalIsHappy = animal.feed("sausages")

// if (5 === 6) { // true (true && false) => false
//     // conditional statements, branching
//     console.log("Hello")
//  } else if (true) {
//     console.log("else if")
//  }
// else {
//     console.log("oooo")
// }

// let a = "abc"
// let b = a.length
// let d = "DEF"
// let e = d.length

// console.log(a)
// console.log(e)
// console.log(a != e)
 
// let animal = "cat"
// let firstLetter= animal[0]
// console.log(firstLetter)
// console.log(animal.indexOf("t"))

// let planet = "neptune"
// console.log(planet[0])
// console.log(planet[5])
// console.log(planet.indexOf("n"))
// console.log(planet.lastIndexOf("n"))  
// console.log(planet.indexOf("n", 1))

// let magicWord = "abrakadabra"

// console.log(magicWord.toUpperCase())

// let sun = "SUN"
// console.log(sun.toLowerCase())
// console.log("abc" === "abc")
// console.log("abc" !== "abc")

// let newWord = magicWord.slice(0, 6)
// console.log(newWord)
// console.log(newWord[0])
// let combined = magicWord[1] + newWord[1]
// console.log(combined)
// let ww = "ABC"
// console.log(ww.slice(-1)) //counting from other side  c = -1

// let greeting = "Hello, World!"
// console.log(greeting)
// greeting = greeting.replace("World", "Javascript")
// console.log(greeting)

// let a = "Hello\nworld" //\n new line
// console.log(a)

// //Arrays
// let someObject = {
//     someProperty: "someValue"
// }
// let arr = [1, 4, 7, 8, true, "ff", false, someObject]
// let emptyArr = []
// let ArrLength = arr.length
// console.log(arr[6])
// console.log(arr.length)
// console.log(arr[7].someProperty)
// arr.push("latest value") //adds a value
// console.log(arr[8])
// arr.pop() //removes the last argument

// let numbers = [1, 2, 3, 4, 5]
// // delete numbers[0]
// // console.log(numbers)
// // console.log(numbers[1])
// numbers[2] = 100
// console.log(numbers)


// For-loop

// for (let i = 0; i <= 10; i++) { //body of the loop
//     console.log(i)
// // // }
// // let names = ["Ance", "Anna", "Annija"] //Iterating over container, Iterating values of the array
// // // for (let i = 0; i < names.length; i++) {
// // //     console.log(names[i])
// // // }

// // // For/ Of loop

// // for (element of names) {
// //     console.log(element)
// // }

// let numbers = [1, 5, 366, 5777]
// let sum = 0

// for (nr of numbers) {
//     sum += nr // same as sum = sum + nr
// }
// console. log(sum)

// let newNumbers = [1, 2, 3, 4, 5, 6]
// let ssum = 0
// for (let i = 0; i < newNumbers.length; i++) {
//     ssum += newNumbers[i]
// }
// console.log(ssum)

// // While loop

// let i = 0
// while(i < 10) {
//     console.log(i)
//     i++
// }

//lecture 4

// let someNumber = 5
// someNumber = 7 //reassign value

// Loop
// for (let i = 0; i < 20; i += 5) {
//     console.log(i)
// }

// //for Of Loop
// let seasons = ["winter", "spring", "autumn", "summer"]
// console.log(seasons[2])
// console.log(seasons.length)
// seasons[1] = "flowers"
// console.log(seasons)
// // for (let i = 0; i < seasons.length; i++) {
// //     console.log(seasons[i])
// // }
// for (el of seasons) {
//     console.log(el)
// }
// let numbers = [1, 2, 3, 4, 5, 6]
// let sum = 0
// for (nr of numbers) {
//  sum += nr
// }
// console.log(sum)

// for (let i = 0; i < 10; i++){ 
//     // console.log(i)
// } if (i === 5) {
//     break
// }

let text = "algjadfb njfhakhg some lhdhakjh"
let textSplit = text.split(" ")
// console.log(textSplit)
// console.log(textSplit[2])

// Modulo operator %

// let z = 5 % 2  //1
// let y = 13 % 5 //3
// let w = 14 % 5 //4
// let o = 15 % 5 //0
// let p = 16 % 5 //1

18 //even number 
19 //odd number

function isEven(number) {
    return number % 2 === 0
}
// console.log(isEven(15))
// console.log(isEven(10))

// alert("Warning")
//  //ask
// let age = prompt("How old are you?")
// let entered = false

// console.log(age)
// if (age <18) {
//     alert("you are not adult yet!")
// } else {
//     alert("you are an adult")
//     entered = true
// } 

// if (entered) {
//     let machineChoice = prompt("do you want to dring wine (A) or beer (B)")
//     if (machineChoice === "B"313131) {
//         console.log("You drink wine")
//     } else if (machineChoice === "R") {
//         alert("you srink beer")
//     }else {
//         console.log("drink water")
//     }
// }

