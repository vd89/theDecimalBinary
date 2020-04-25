const converterOne = document.getElementById('converter-one')
const inputOne = document.getElementById('inputOne')
const converterTwo = document.getElementById('converter-two')
const inputTwo = document.getElementById('inputTwo')

const value = document.getElementById('value')
const swap = document.getElementById('swap')



const bin = (n) => {
    return n.toString(2)
}
const hex = (n) => {
    return n.toString(16)
}
const oct = (n) => {
    return n.toString(8)
}
function binToDecimal(string) {
    let decimal = +0;
    let bits = +1;
    for (let i = 0; i < string.length; i++) {
        let currNum = +(string[string.length - i - 1]);
        if (currNum === 1) {
            decimal += bits;
        }
        bits *= 2;
    }
    return decimal
}



function calculate() {
    const convOne = converterOne.value
    const convTwo = converterTwo.value

    switch (convOne) {
        case 'dec':
            var inpOneValue = inputOne.value
            inputTwo.value = bin(parseFloat(inpOneValue))
            value.innerHTML = `Decimal to Binary value`
            break;
        case 'bin':
            var inpOneValue = inputOne.value
            inputTwo.value = binToDecimal(inpOneValue)
            value.innerHTML = `Binary to Decimal value`
            break;
        case 'hex':
            var inpOneValue = inputOne.value
            inputTwo.value = hex(parseFloat(inpOneValue))
            value.innerHTML = `Decimal to Hexadecimal value`
            break;
        case 'oct':
            var inpOneValue = inputOne.value
            inputTwo.value = oct(parseFloat(inpOneValue))
            value.innerHTML = `Decimal to Octal value`
            break;
    
        default:
            break;
    }
}

//Event Listeners 
inputOne.addEventListener('input',calculate)
converterOne.addEventListener('change', calculate)
converterTwo.addEventListener('change', calculate)

swap.addEventListener('click', () => {
    const temp = converterOne.value
    converterOne.value = converterTwo.value
    converterTwo.value = temp
    calculate()
})

calculate()

