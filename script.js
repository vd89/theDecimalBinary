const converterOne = document.getElementById('converter-one')
const inputOne = document.getElementById('inputOne')
const converterTwo = document.getElementById('converter-two')
const inputTwo = document.getElementById('inputTwo')

const value = document.getElementById('value')
const error = document.getElementById('error')
const swap = document.getElementById('swap')



const bin = (n) => {
    return n.toString(2)
}


const binToDec = (n) => {
    return dec = parseInt(n,2)
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
                let isValidBinary = inpOneValue.split('').every(d => d == 0 || d == 1)

                if (!isValidBinary) {
                    error.innerHTML = `Please provide in binary`
                    value.style.display = 'none'
                    if (isValidBinary) {
                        console.log(`This is valid`);
                        
                    }
                } else {
                    inputTwo.value = binToDec(inpOneValue)
                    value.innerHTML = `Binary to Decimal value`
                   
                }

                break;

            default:
                break;
  
    }
}

//Event Listeners 
inputOne.addEventListener('input',calculate)
converterOne.addEventListener('change', calculate)
converterTwo.addEventListener('change', calculate)

// swap.style.display ='none'

swap.addEventListener('click', () => {
    const temp = converterOne.value
    converterOne.value = converterTwo.value
    converterTwo.value = temp
    calculate()
})

calculate()

