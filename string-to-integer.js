// 版本1
// 确定所有条件边界
var myAtoi = function(str) {
    if(str.length < 1) {
        return 0;
    }
    let effectiveStr = ' -+0123456789';
    if(effectiveStr.indexOf(str[0]) < 0) {
        return 0;
    } else {
        let newStr = '';
        let isSymbol = false;
        let isNum = false;
        for(let i of str) {
            if((i == '-' || i == '+') && !isNum) {
                if(!isSymbol) {
                    newStr = newStr + i;
                    isSymbol = true;
                    continue;
                } else {
                    break;
                }
            }
            if(i == ' ' && (!isSymbol && !isNum)) {
                continue;
            } else if (i == ' ' && (isSymbol || isNum)) {
                break;
            }
            if('1234567890'.indexOf(i) < 0) {
                break;
            } else {
                isNum = true;
                newStr = newStr + i;
            }
        }
        if(isSymbol && !isNum) {
            newStr = 0;
        }
        
        let newNum = Number(newStr);
        if(newNum < Math.pow(-2, 31)) {
            newNum = Math.pow(-2, 31)
        } else if(newNum > Math.pow(2, 31)-1) {
            newNum = Math.pow(2, 31)-1;
        }
        return newNum;
    }
};

// 版本2
// js的parseInt()方法
var myAtoi2 = function(str) {
    let newNum = parseInt(str);
    console.log(newNum);
    if(!newNum) {
        return 0;
    }
    if(newNum < Math.pow(-2, 31)) {
            newNum = Math.pow(-2, 31)
        } else if(newNum > Math.pow(2, 31)-1) {
            newNum = Math.pow(2, 31)-1;
        }
        return newNum;
}


let result = myAtoi2('words and 987');
console.log(result)