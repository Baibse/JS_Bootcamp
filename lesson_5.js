// let letter = "ABC"

// let charCode = letter.charCodeAt(0)
// // console.log(charCode) //ascii chart
// // console.log(letter.charCodeAt(1))

// let l = String.fromCharCode(77)
// console.log(l)

// "Hello this is message", 1

// function to encript the MessageChannelfunction 7
// function caesarsCipher(text, key) {   // around 20 lines of code
// }



// console.log(floored) // 0 to 9

// Math.floor(4.5) === 4
// // Math.floor(5.7) === 5
// function generateRandomNumber(upperBound) {
//     let random = Math.random() * upperBound ////0.000000 - 0.999999999999999
//     let floored = Math.floor(random)
//     return floored
// }

// let random = generateRandomNumber(10)


// let guess = prompt("What number am I thinking of (0-9)?")
// while (guess !== random) {
//     alert("wrong number! It was ") + random
//     guess = prompt("What number am I thinking of (0-9)?")
// }
// if (guess === floored) {
//     alert("Good job, you have guessed the number! It was" + random)
// }else {
//     alert("Sorry! You lost! The number was" + random)
// }
// function changeText() {
//     let text = document.getElementById("myText")
//     text.innerHTML = "ABCDF" 
// }
let isGreen = true
let colors = ["red", "green", "purple", "cyan"]
function changeBackground() {
    let b = document.body
    let randomIndex = Math.floor(Math.random() * colors.length)
    let = randomColor = colors[randomIndex]
   
    b.style.backgroundColor = randomColor
    }
   isGreen = !isGreen

