const converterOne = document.getElementById('converter-one')
const inputOne = document.getElementById('inputOne')
const converterTwo = document.getElementById('converter-two')
const inputTwo = document.getElementById('inputTwo')

const value = document.getElementById('value')
const swap = document.getElementById('swap')

const toBinary = (n, bin = '') => {
    if (n <= 1) {
        bin = n + bin;
        const ofZero = 8 - bin.length;
        for (let i = 0; i < ofZero; i++) {
            bin = '0' + bin;
        }
        return bin;
    } else {
        bin = Math.floor(n % 2) + bin;
        return toBinary(Math.floor(n / 2), bin);
    }
};

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
            inputTwo.value = toBinary(inpOneValue)
            value.innerHTML = `Decimal to Binary value`
            break;
        case 'bin':
            var inpOneValue = inputOne.value
            inputTwo.value = binToDecimal(inpOneValue)
            value.innerHTML = `Binary to Decimal value`
    
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

