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
}

const performOperation = () => {
    operators = problemSpan.innerText.split(' ')
    let leftNum = Number(operators[0])
    let rightNum = Number(operators[2]) 
    let sign = operators[1]
    if (operators.length !== 3) { 
        return undefined
    }
    console.log(sign)
    switch(sign) {
        case '+': {
            resultSpan.innerText = leftNum + rightNum
            break
        }

        case '*': {
            resultSpan.innerText = leftNum * rightNum
            break
        }

        case '-': {
            resultSpan.innerText = leftNum - rightNum
            break
        }

        default: {
            resultSpan.innerText =  leftNum / rightNum
            break
        }

    }
}

const clear = () => {
    problemSpan.innerText = ''
    resultSpan.innerText = 'resultSpan.innerText' 
}