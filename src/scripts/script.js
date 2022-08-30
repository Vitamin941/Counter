const problemSpan = document.getElementById("problem")
const resultSpan = document.getElementById("result")
var numLeft = ''
var numRight = ''
var sign = ''

const addSymbol = idBtn => {
    let btn = document.getElementById(idBtn)
    let btnText = btn.innerText
    if (btn.classList.contains("operation") && (numLeft.length !== 0)) {
        sign = btnText
    }
    
    if (btn.classList.contains("num") && (sign === '')) {
        numLeft += btnText
    }
        
    if (btn.classList.contains("num") && (sign !== '')) {
        numRight += btnText    
    }
    updateText([numLeft, sign, numRight])
}

const resetSign = () => {
    if (sign === '') {
        numLeft = (-1 * Number(numLeft)).toString()
    }

    else {
        numRight = (-1 * Number(numRight)).toString()
    } 

    updateText([numLeft, sign, numRight])
}

const addDelimiter = () => {
    if ((sign === '') && (numLeft.length !== 0)) {
        numLeft += '.'
        console.log("add point to left number")
    }
    
    if ((sign !== '') && (numRight.length !== 0)) {
        numRight += '.'
        console.log("add point to right number")
    }
    updateText([numLeft, sign, numRight])
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
    sign = ''
}

const updateText = (operators) => {
    problemSpan.innerText = operators[0] + ' ' + operators[1] + ' ' + operators[2];
}