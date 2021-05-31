const AVAILABLE_WORD = ["qualification", "reactor", "electricity", "breeze", "mummification"]

const KEYBOARD_TOP = "QWERTYUIOP"
const KEYBOARD_MID = "ASDFGHJKL"
const KEYBOARD_BOT = "ZXCVBNM"

const MAX_HP = 5

let hp = MAX_HP

let wordToGues = null

window.onload = function() {
    play()
}

function play() {
    wordToGuess = generateRandomWord().toUpperCase()

    hp = MAX_HP
    document.getElementById("healthContainer").innerHTML = ""
    document.getElementById("mid").innerHTML = ""
    document.getElementById("bot").innerHTML = ""
    document.getElementById("bot").style.pointerEvents = "auto"
    document.getElementById("bot").style.backgroundColor = "white"

    displayHealthPoints()
    displayGuessWord()
    displayVirtualKeyboard()

}
 
function displayHealthPoints() {
    let healthContainer = document.getElementById("healthContainer")

    for (let _ = 0; _ < MAX_HP; _++) {
        let img = document.createElement("img")
        img.className = "healthPoint"
        img.src = "heart.png"
        healthContainer.appendChild(img)
    }
}

function generateRandomWord() {
    let ri = Math.floor(Math.random() * AVAILABLE_WORD.length)
    return AVAILABLE_WORD[ri]
}

function displayGuessWord() {
    let mid = document.getElementById("mid")

    let middleLetters = document.createElement("div")
    middleLetters.id = "middleLetters"
    middleLetters.className = "guessWord"
    mid.appendChild(middleLetters)

    for (let i = 0; i < wordToGuess.length; i++) {
        let emptyLetter = document.createElement("div")
        emptyLetter.className = "letterContainer"
        emptyLetter.style.color = "transparent"
        emptyLetter.innerText = wordToGuess[i]
        middleLetters.appendChild(emptyLetter)

    }
    displayFirstAndLastVisible(middleLetters)
}

function displayFirstAndLastVisible(middleLetters) {
    let firstLetter = wordToGuess[0]
    let lastLetter = wordToGuess[wordToGuess.length - 1]

    let letters = middleLetters.children
    for  (letter of letters) {
        if (letter.innerText === firstLetter || letter.innerText === lastLetter) {
            letter.style.color = "black"
        }
    }
    letters[0].style.color = "black"
    letters[letters.length - 1].style.color = "black"
}

function displayVirtualKeyboard() {
    let keyboard = document.createElement("div")
    let bot = document.getElementById("bot")
    bot.appendChild(keyboard)
    
    displayKeyboardRow(keyboard, KEYBOARD_TOP)
    displayKeyboardRow(keyboard, KEYBOARD_MID)
    displayKeyboardRow(keyboard, KEYBOARD_BOT)
    
}

function displayKeyboardRow(keyboardContainer, keyboardRowLetters) {

    let keyboardRowContainer = document.createElement("div")
    keyboardRowContainer.className = "keyboardRow"

    for (const char of keyboardRowLetters) {
        let letterContainer = document.createElement("div")
        letterContainer.className = "letterContainer keyboardLetter"
        letterContainer.innerText = char

        letterContainer.onclick = function() {
            if (char === firstLetter || char === lastLetter) {
                letterContainer.style.pointerEvents = "none"
                letterContainer.style.backgroundColor = "darkgrey"
            }
        
        letterContainer.onclick = () => { handleKeyboardButtonClick(letterContainer, char) }
       
        }

        keyboardRowContainer.appendChild(letterContainer)
    }
    keyboardContainer.appendChild(keyboardRowContainer)
}

function handleKeyboardButtonClick(letterContainer, char) {
    let guessWordLetterIndex = wordToGuess.indexOf(char)
    if (guessWordLetterIndex !== -1) {
        let middleLetters = document.getElementById("middleLetters").children
        letterContainer.style.backgroundColor = "green"
        let openLetterCounter = 

        for (ml of middleLetters) { 
            if (ml.innerText === char) {
                    ml.style.color = "black"
            } 

            if (ml.style.color === "black") { openLetterCounter++ }
        } 
         if (openLetterCounter === wordToGuess.length) {
            disableKeyboards()

         }


    } else {
        letterContainer.style.backgroundColor = "red"
        let healthContainer = document.getElementById("healthContainer")
        let hpToRemove = healthContainer.lastElementChild
        healthContainer.removeChild(hpToRemove)
        hp--

        if (hp === 0) {
           disableKeyboards()
           document.body.style.backgroundColor = "red"

        }
    }
    letterContainer.style.pointerEvents = "none"
}

function disableKeyboards() {
    let bot = document.getElementById("bot")
    bot.style.pointerEvents = "none"
    bot.style.userSelect = "none"
}