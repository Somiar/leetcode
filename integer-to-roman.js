var intToRoman = function(num) {
  let romanList = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }
  let romanStr = '';
  let divisor = 10;
  while(num > 0) {
    let remainder = num % divisor;
    if(!romanList[remainder]) {
      let repeat = 1;
      if(remainder < (.5 * divisor)) {
        repeat = remainder/(.1*divisor);
        romanStr = romanList[parseInt(divisor/10)].repeat(repeat) + romanStr;
      } else {
        repeat = (remainder-(.5*divisor))/(.1*divisor);
        romanStr = romanList[(.5*divisor)] + romanList[parseInt(divisor/10)].repeat(repeat) + romanStr;
      }
    } else {
      romanStr = romanList[remainder] + romanStr;
    }
    num = num - remainder;
    divisor = divisor * 10;
  }
  return romanStr;
};

// var roman = intToRoman(9);
// console.log(roman)


var romanToInt = function(s) {
  let romanList = {
    I : 1,
    IV: 4,
    V : 5,
    IX: 9,
    X : 10,
    XL: 40,
    L : 50,
    XC: 90,
    C : 100,
    CD: 400,
    CM: 900,
    D : 500,
    M : 1000,
  }

  let newNum = 0;
  let isDouble = false;
  for(let i = 0; i < s.length; i++) {
    if(isDouble) {
      isDouble = false;
      continue;
    }
    if(romanList[s.slice(i, i+2)]) {
      newNum += romanList[s.slice(i, i+2)]
      isDouble = true;
    } else {
      newNum += romanList[s.slice(i, i+1)]
    }
  }
  return newNum;
};

var intNum = romanToInt('IV');
console.log(intNum);