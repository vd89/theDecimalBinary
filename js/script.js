const selecter = document.getElementById('selecter')
const inputOne = document.getElementById('inputOne')
// const inputTwo = document.getElementById('inputTwo')

const value = document.getElementById('value')
const error = document.getElementById('error')
const convert = document.getElementById('convert')





// 
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

