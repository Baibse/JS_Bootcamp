

// defining the function
function greet(){
    console.log("Hello, World!")
}
//calling the function
greet()

function greet(name){ //name is an argument or parameter
    console.log("Hello, " + name)    
}
greet("World!")
greet("Baiba!")

function devide(a, b) {
    console.log(a * b)
}
devide(10, 5)

function isEven(number) {   // Modulo operator %
    return number % 2 === 0
}

// Object

let nameObject = {
    firstName: "Baiba", //key: value
    lastName: "Maculska",
    age: 40,
    fullName : function() {
        return this.firstName + this.lastName
    } //method is a function that belongs to an object
}
console.log(nameObject.fullName()) 
let result = nameObjec
console.log(result)
// console.log(nameObject.age)
// let fullName = nameObject.firstName + " " + nameObject.lastName
// // console.log(fullName)
// let fullName = nameObject["firstName"] + " " + nameObject["lastName"]
// console.log(fullName)

function multiply (a, b) {
         let result = a * b
         return result
     }
     let res = multiply(2, 5)
     console.log(res)
     
let animal = {
    name: "good Doggo",
    color: "white and black",
    height: 100,
    pet: function() { //method
        console.log("the dog feels good when you pet it")
    },
    feed: function(food) {
        console.log("the dog is very much enjoying eating " + food)
        return true
    }
}
animal.pet()
let animalIsHappy = animal.feed("sausages")

 //scope { }
//  //Global scope
 let number = 5 
 { 
     let number = 11
    number = 6
        {
          let number = 123212
          console.log(number)  
        }

//  .length
//  .indexOf        index of a specific letter (planet.indexOf(n))
//  .lastIndexOf    last index of a word
//  .toUpperCase
//  .toLowerCase
//  .slice          slices the word from (0, 6) index
//  .replace        let greeting = "Hello, World!"  greeting = greeting.replace("World", "Javascript")
//  \n              let a = "Hello\nworld" //\n new line
// arr.pop()        removes the last argument
//  arr.push()      adds a value
//  break           to stop whatever 
//  .split(" ")     to split text at empty spaces and create and array
Math.pow()



let arr = [1, 4, 7, 8, true, "ff", false, someObject]
let emptyArr = []
let ArrLength = arr.length

arr.push("latest value") //adds a value
console.log(arr[8])

// For-loop

for (let i = 0; i <= 10; i++) { //body of the loop
    console.log(i)
}
let names = ["Ance", "Anna", "Annija"] //Iterating over container, Iterating values of the array
for (let i = 0; i < names.length; i++) {
    console.log(names[i])

let newNumbers = [1, 2, 3, 4, 5, 6]
let ssum = 0
for (let i = 0; i < newNumbers.length; i++) {
    ssum += newNumbers[i]
}
console.log(ssum)
}

for (let i = 0; i < 10; i++){ 
        console.log(i)
    } if (i === 5) {
        break
    }

// For/ Of loop

for (element of names) {
    console.log(element)
}

let numbers = [1, 5, 366, 5777]
let sum = 0
for (nr of numbers) {
    sum += nr // same as sum = sum + nr
}
console. log(sum)

// // While loop

let i = 0
while(i < 10) {
    console.log(i)
    i++
}


//splitting text

let text = "algjadfb njfhakhg some lhdhakjh"
let textSplit = text.split(" ")


Math.floor(Math.random() * 10) // if from 0 - 10
let hh = parseInt(timeSplit[0]) // to create an integer from text "0" to 0 


// OOP

class Animal {
    constructor(age) {
    this.age = age
    }
}
class AnimalWithBreed extends Animal {
    constructor(age, breed) {
        super(age)
        this.breed = breed
    }
    talk() { 
        return "Whatever animals say!"
    }
}
class Cat extends AnimalWithBreed {
    constructor(age, breed)
}
let catGarden = []
let catOne = new Cat(10, "Siam")


for (let i = 0; i <10; i++) {
    catGarden.push(catOne)
}

// Map

let myMap = new Map()
myMap.set("john.wick@gmail.com", "John Wick")
myMap.set("ulfrica.zerender@yandex.ru", "Ulfrica Zerender")

let johnWick = myMap.get(["john.wick@gmail.com"])
console.log(johnWick)

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName  = lastName
        this.age = age
    }
    static talk()
}
Person.talk()




let newMap = new Map()
newMap.set(123, new Person("Geralt", "Rivyan", 40))
let person = newMap.get(123)
console.log(person)


function greet(name){ //name is an argument or parameter
    console.log("Hello, " + name)  
}
greet("Baiba") 
}

let numbers = [3, 5, 2, 1, 4]
// numbers.sort() // from 1 - 5

function sortFunction(a, b) { // from 5 - 1
    return b - a
}

numbers.sort(sortFunction)
console.log(numbers)

let words = ["abks", "gjdlssdkfjs", "tttkdk"]
words.sort(function(a, b) {
    return a.length - b.length
})
console.log(words)

//functional programming
let nrs = [1, 2, 3, 4, 5, 6, 7]

nrs = nrs.map(function(nr) {
    return nr * 2
})
nrs = nrs.filter(function(nr) {
    return nr % 2 === 0
})

nrs = nrs.map((nr) => {return nr * 3})
    .filter((nr) => {return nr % 2 === 0})
    .sort((a, b) => {return b - a})

console.log(nrs)


function func(limit) {
    if (limit < 0) {
        return
    }
    func(limit - 1)
}

func(10) // func(10) => func(9) ....


function fibonaci(n) {
    let firstNumber = 0
    let secondNumber = 1
    let currentNumber = null

    for (let i = 2; i < n; i++) {
        currentNumber = firstNumber + secondNumber
        firstNumber = secondNumber
        secondNumber = currentNumber
    }
    return currentNumber
}

function fibonacciRecursive(n) {
    if (n <= 1) {
        return n
    }

}

fibonacciRecursive(10)
console.log(fibonacci(7))

function findSum(numbers) {
    let sum = 0
    // for (let i = 0; i < numbers.length; i++) {
    //     sum += numbers[i]
    // }
    for (let nr of numbers) {
        sum +=nr
    }
    return
}
console.log(findSum([2, 4, 9]))


let hundredNumbers = ""
for (i = 0; i <=100; i++) {
 hundredNumbers += i + ", "
}
console.log(hundredNumbers)

//bitshifting << >>

let nr = 8
// let shifted = nr >> 1
let shifted = nr << 1
console.log(shifted)

let arr = [1, 9, 5]
// arr.sort()
arr.sort(function (a, b) {
    return b - a //other way around
})

console.log(arr)


function greetEveryone(names) {
    
    for (let name of names) {
        console.log("Hello " + name)
    }
}

greetEveryone(["Indra", "Elina", "Anna"])



class Array {
    constructor() {
        this.collection = []
    }

    at(index) {
        return this.collection[index]
    }

    push(el) {
        this.collection.push(el)
    }

    selectionSort() {  // Selection sort
        for (let i = 0; i < this.collection.length; i++) {
            let min = this.collection[i]
            let ri = -1
            for (let j = i + 1; j < this.collection.length; j++) {
                if (this.collection[j] < min) {
                    min = this.collection[j]
                    ri = j
                }
            }

            if (ri !== - 1) {
                let replacable = this.collection[i]
                this.collection[i] = min
                this.collection[ri] = replacable
            }
        }
    }

    // bubbleSort() {
    //     let sorted = true
    //     do {
    //         for (let i = 0; i < this.collection.length - 1; i++) {
    //             if (this.collection[i] > this.collection[i + 1]) {
    //                 let original = this.collection[i]
    //                 this.collection[i] = this.collection[i + 1]
    //                 this.collection[i + 1] = original
    //                 sorted = false
    //             }
    //         }
    //     } while (!sorted)
    // }
}

let myArray = new Array()
myArray.push(1)
myArray.push(4)
myArray.push(5)

myArray.selectionSort()
myArray.bubbleSort()
console.log(myArray)

let firstArray = new Array()
let secondArray = new Array()



// firstArray.at(2)
// firstArray.push(2)


function printArguments(...args) {
    for (let arg of args) {
        console.log(arg)
    }
}
printArguments(1, 2, 3, 4, 5, 556)


function findMin(numbers) {
    let min = null
    for (let nr of numbers) {
        if (!min) {
            min
        }
    }
}

class Dog {
    eat() {
        console.log("nom nom nom")
    } 

    static talk() {
        console.log("woof")
    }
}

//static method 
Dog.talk()



function subtract(a, b) {
    return a - b
}

function calculate(mathematicalOperation, a, b) {
    return mathematicalOperation(a, b)
}

let r = calculate((a, b) => {return a/b}, 5, 10)