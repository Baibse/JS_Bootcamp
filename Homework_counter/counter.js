let count = document.getElementById("number")

function increment() {
   count++
   number.innerHTML = count
}

function decrement() {
    count--
    number.innerHTML = count
}

// let startCountingFrom = 0

// window.onload = function() {
//     let number = document.getElementById("number")
//     number.innerText = startCountingFrom
// }
// function operation(isAddition) {
//     let numberContainer = document.getElementById("number")
//     let n = parseInt(numberContainer.innerText)

//     if(isAddition) {
//         numberContainer.innerText = ++n
//     } else {
//         numberContainer.innerText = --n

//     }

// }
