const selecter = document.getElementById('selecter')
const inputOne = document.getElementById('inputOne')


const outPutLab = document.getElementById('outPutlab')
const error = document.getElementById('error')
const convert = document.getElementById('convert').remove()
const binOut = document.getElementById('bin')
const octOut = document.getElementById('oct')
const hexOut = document.getElementById('hex')
const binLab = document.getElementById('binLab')

const calculate = () => {
    var selecterVal = selecter.value
    switch (selecterVal) {
        case 'dec':
            forDec()
            break;
        case 'bin':
            forBin()
            break
        case 'hex':
            forHex()
            break;
        default:
            break;
    }
}




// 
//Event Listeners 
inputOne.addEventListener('input',calculate)
selecter.addEventListener('change',calculate)

// swap.style.display ='none'

// swap.addEventListener('click', () => {
//     const temp = converterOne.value
//     converterOne.value = converterTwo.value
//     converterTwo.value = temp
    
// })



