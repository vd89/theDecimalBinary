const selecter = document.getElementById('selecter');
const inputOne = document.getElementById('inputOne');
// const reset = document.getElementById('reset')

const outPutLab = document.getElementById('outPutlab');
const error = document.getElementById('error');
const convert = document.getElementById('convert').remove();
const binOut = document.getElementById('bin');
const octOut = document.getElementById('oct');
const hexOut = document.getElementById('hex');
const binLab = document.getElementById('binLab');
const hexLab = document.getElementById('hexLab');
const octLab = document.getElementById('octLab');

const resetOne = document.getElementById('reset1');

const calculate = () => {
  var selecterVal = selecter.value;
  switch (selecterVal) {
    case 'dec':
      forDec();
      break;
    case 'bin':
      forBin();
      break;
    case 'hex':
      forHex();
      break;
    case 'oct':
      forOct();
      break;
    default:
      break;
  }
  return;
};
//
//Event Listeners
inputOne.addEventListener('input', calculate);
selecter.addEventListener('change', calculate);
