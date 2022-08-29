const problemSpan = document.getElementById("problem")
const resultSpan = document.getElementById("result")
var numLeft = ''
var numRight = ''
var symbol = ''

const addSymbol = idBtn => {
    let btn = document.getElementById(idBtn)
    let btnText = btn.innerText
    if (btn.classList.contains("operation") && (numLeft.length !== 0)) {
        symbol = btnText
    }
    
    if (btn.classList.contains("num") && (symbol === '')) {
        numLeft += btnText
    }
        
    if (btn.classList.contains("num") && (symbol !== '')) {
        numRight += btnText    
    }
    problemSpan.innerText = numLeft + ' ' + symbol + ' ' + numRight
    console.info(problemSpan.innerText)
}

const resetSign = () => {
    console.log("reset")
    if (symbol === '') {
        numLeft = (Number(numLeft) * (-1)).toString()
        return
    }
    numRight = (Number(numRight) * (-1)).toString()
}

const performOperation = () => {
    operators = problemSpan.innerText.split(' ')
    let leftOperand = Number(operators[0])
    let rightOperand = Number(operators[2]) 
    let sign = operators[1]
    if (operators.length !== 3) { 
        return undefined
    }
    switch(sign) {
        case '+': {
            resultSpan.innerText = leftOperand + rightOperand
            break
        }

        case '*': {
            resultSpan.innerText = leftOperand * rightOperand
            break
        }

        case '-': {
            resultSpan.innerText = leftOperand - rightOperand
            break
        }

        case '%': {
            resultSpan.innerText = (rightOperand / 100) * leftOperand
            break
        }

        default: {
            resultSpan.innerText =  leftOperand / rightOperand
            break
        }

    }
}

const clean = () => {
    let calcSpans = document.querySelectorAll("span")
    calcSpans.forEach(span => {
        span.innerText = ''
    });
    numLeft = ''
    numRight = ''
    symbol = ''
}