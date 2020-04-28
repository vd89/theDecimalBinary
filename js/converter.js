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
    return dec = parseInt(n, 2)
}
const hexToDec = (n) => {
    return dec = parseInt(n,16)
}
const octToDec = (n) => {
    return dec = parseInt(n,8)
}

const forDec = () => {
    outPutLab.innerHTML = 'Decimal to other forms of binary'
    let inpOneVal = inputOne.value
    // console.log(inpOneVal);
    binOut.innerHTML = bin(parseFloat(inpOneVal))
    octOut.innerHTML = oct(parseFloat(inpOneVal))
    hexOut.innerHTML = hex(parseFloat(inpOneVal))
}

const binInputValid = (n) => {
  
    let isValid = n.split('').every(d => d == 0 || d == 1)
    if (!isValid) {
        error.innerHTML = "Please provide a valid Binary number"
    } else {
        error.innerHTML = ''
        return 
    }
}

const forBin = () => {
    outPutLab.innerHTML = 'Binary to other forms'
    let inpOneVal = inputOne.value
    binInputValid(inpOneVal)
    binLab.innerHTML = 'Decimal'
    binOut.innerHTML = binToDec(inpOneVal)
}