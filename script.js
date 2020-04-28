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

const binToDec = (n) => {
    return dec = parseInt(n,2)
}

const hexToDec = (n) => {
    return dec = parseInt(n, 16)    
}

const octToDec = (n) => {
    return dec = parseInt(n,10)
}


function calculate() {
    const convOne = converterOne.value
    const convTwo = converterTwo.value

    switch (convOne) {
        case 'dec':
            var inpOneValue = inputOne.value
            switch (convTwo) {
                case 'dec':
                    inputTwo.value = inputOne.value
                    value.innerHTML = `Decimal Value for decimal will be same`
                    break;
                case 'bin':
                    inputTwo.value = bin(parseFloat(inpOneValue))                        
                    value.innerHTML = `Decimal to Binary value`
                break;
                case 'hex':
                    inputTwo.value = hex(parseFloat(inpOneValue))
                    value.innerHTML = `Decimal To Hexadecimal value`
                    break;
                case 'oct':
                    inputTwo.value = oct(parseFloat(inpOneValue))
                    value.innerHTML = `Decimal To Octadecimal value`
                    break;
                default:
                    break;
            }
            break;
        case 'bin':
            var inpOneValue = inputOne.value
            inputTwo.value = binToDec(inpOneValue)
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

