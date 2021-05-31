
let calculator = {
    firstNumber: null,
    secondNumber: null,
    operator: null,
    decimal: 1
}

let display = document.getElementById("display")


window.onload = function() {
    setDisplayValue(0)
}

function setDisplayValue(displayValue) {
    let decimalString = displayValue.toString()

    if (decimalString.length > 14) {
        decimalString = decimalString.substring(0, 13)
    }

    display.value = parseFloat(decimalString)
}


function setValue(digit) {
    if (calculator.operator === "===") {
        clearAll()
    }

    if (!calculator.firstNumber) {
        if (calculator.decimal === 1) {
            calculator.firstNumber = digit
        } else {
            calculator.firstNumber = digit / calculator.decimal
            calculator.decimal *= 10
        }

        setDisplayValue(calculator.firstNumber)
    } else {
        if (!calculator.operator) {
            if (calculator.decimal === 1) {
                calculator.firstNumber = calculator.firstNumber * 10 + digit
            } else {
                calculator.firstNumber = calculator.firstNumber + digit / calculator.decimal
                calculator.decimal *= 10
            }
            
            setDisplayValue(calculator.firstNumber)
            
        } else {
            if (!calculator.secondNumber) { 
                if (calculator.decimal === 1) {
                    calculator.secondNumber = digit 
                } else {
                    calculator.secondNumber = digit / calculator.decimal
                    calculator.decimal *= 10
                }
                
                setDisplayValue(calculator.secondNumber)
            }
            else { 

                if (calculator.decimal === 1) {
                    calculator.secondNumber = calculator.secondNumber * 10 + digit
                } else {
                    calculator.secondNumber = calculator.secondNumber + digit / calculator.decimal
                    calculator.decimal *= 10
                }
                
                setDisplayValue(calculator.secondNumber)
            }
        }       
    }
} 

function setOperator(op) {
    if (calculator.firstNumber && calculator.secondNumber && calculator.operator) {
        let result = doOperation()
        calculator.firstNumber = result
        calculator.secondNumber = null 
        setDisplayValue(calculator.firstNumber)
    }

    calculator.operator = op
    calculator.decimal = 1
}

function doOperation() {

    let fn = calculator.firstNumber
    let sn = calculator.secondNumber
    switch(calculator.operator) {
        case '+':
            return fn + sn
        case '-':
            return fn - sn
        case '*':
            return fn * sn
        case '/':
            return fn / sn
      
    }
}

function clearAll() {
    calculator.firstNumber = 0
    calculator.secondNumber = null 
    calculator.operator = 0
    calculator.decimal = 1
    setDisplayValue(0)    
}

function decimalNumber() {
    if (calculator.decimal === 1) {
        calculator.decimal = 10
        display.value += "."
    }
}

