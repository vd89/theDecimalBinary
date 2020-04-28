const bin = (n) => {
  return n.toString(2);
};

const hex = (n) => {
  return n.toString(16);
};

const oct = (n) => {
  return n.toString(8);
};

const binToDec = (n) => {
  return (dec = parseInt(n, 2));
};
const hexToDec = (n) => {
  return (dec = parseInt(n, 16));
};
const octToDec = (n) => {
  return (dec = parseInt(n, 8));
};

const forDec = () => {
  outPutLab.innerHTML = 'Decimal to other forms of binary';
  let inpOneVal = inputOne.value;
  binLab.innerHTML = "Binary"
  binOut.innerHTML = bin(parseFloat(inpOneVal));
  octOut.innerHTML = oct(parseFloat(inpOneVal));
  hexOut.innerHTML = hex(parseFloat(inpOneVal));
  return;
};

const binInputValid = (n) => {
  let isValid = n.split('').every((d) => d == 0 || d == 1);
  if (!isValid) {
    error.innerHTML = 'Please provide a valid Binary number';
  } else {
    error.innerHTML = '';
    return;
  }
};

const forBin = () => {
  outPutLab.innerHTML = 'Binary to other forms';
  let inpOneVal = inputOne.value;
  binInputValid(inpOneVal);
  binLab.innerHTML = 'Decimal';
  binOut.innerHTML = binToDec(inpOneVal);
  hexOut.innerHTML = hex(binToDec(inpOneVal));
  octOut.innerHTML = oct(binToDec(inpOneVal));
  return;
};

const hexValdate = (n) => {
  let isValid = n
    .split('')
    .every(
      (d) =>
        d == 0 ||
        d == 1 ||
        d == 2 ||
        d == 3 ||
        d == 4 ||
        d == 5 ||
        d == 6 ||
        d == 7 ||
        d == 8 ||
        d == 9 ||
        d == 'a' ||
        d == 'b' ||
        d == 'c' ||
        d == 'd' ||
        d == 'e' ||
        d == 'f',
    );
  if (!isValid) {
    error.innerHTML = 'Please provide a valid hex value ';
  } else {
    error.innerHTML = '';
    return;
  }
};

const forHex = () => {
  inputOne.setAttribute('type', 'text');
  let inpOneVal = inputOne.value;
  hexValdate(inpOneVal);
  outPutLab.innerHTML = 'Hexadecimal value to other';
  hexLab.innerHTML = 'Decimal';
  binLab.innerHTML = "Binary"
  hexOut.innerHTML = hexToDec(inpOneVal);
  binOut.innerHTML = bin(hexToDec(inpOneVal));
  octOut.innerHTML = oct(hexToDec(inpOneVal));
  return;
};

const octValidate = (n) => {
  let isValid = n
    .split('')
    .every(
      (d) =>
        d == 0 ||
        d == 1 ||
        d == 2 ||
        d == 3 ||
        d == 4 ||
        d == 5 ||
        d == 6 ||
        d == 7,
    );
  if (!isValid) {
    error.innerHTML = 'Please provide a valid hex value ';
  } else {
    error.innerHTML = '';
    return;
  }
};
const forOct = () => {
  let inpOneVal = inputOne.value;
  octValidate(inpOneVal);
  outPutLab.innerHTML = 'Octal value to other';
  octLab.innerHTML = 'Decimal';
  binLab.innerHTML = "Binary"
  hexLab.innerHTML = 'Hexadecimal'
  octOut.innerHTML = octToDec(inpOneVal);
  hexOut.innerHTML = hex(octToDec(inpOneVal));
  binOut.innerHTML = bin(octToDec(inpOneVal));
  return;
};
