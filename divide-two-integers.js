/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

 // 版本1超出时间限制
var divide = function(dividend, divisor) {
    if (dividend === 0 || Math.abs(dividend) < Math.abs(divisor)) {
        return 0;
    }
    let result = 0;
    let isMinus = false;
    let sum = dividend + divisor;
    if((sum > dividend && sum <divisor) || (sum > divisor && sum < dividend)) {
        isMinus = true;
    } 
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    while(dividend >= divisor) {
        dividend -= divisor;
        result += 1;
    }
    if(result >= 2**31) {
        if(isMinus) {
            return (-2)**31;
        } else {
            return 2**31-1;
        }
    }
    if(isMinus) {
        return -result;
    } else {
        return result;
    }
    
};

var divide1 = function(dividend, divisor) {
    if (dividend === 0 || Math.abs(dividend) < Math.abs(divisor)) {
        return 0;
    }
    let result = 1;
    let isMinus = false;
    let sum = dividend + divisor;
    if((sum > dividend && sum <divisor) || (sum > divisor && sum < dividend)) {
        isMinus = true;
    } 
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    function getResult(tempResult, tempDivisor) {
        tempDivisor += tempDivisor;
        if(tempDivisor <= dividend) {
            tempResult += tempResult;
            getResult(tempResult, tempDivisor);
            result = Math.max(result, tempResult)
            if(dividend-tempDivisor > 0 && dividend - tempDivisor < divisor) {
                console.log(result, tempResult)
                result += tempResult;
                return;
            }
        }
        return;
    }
    getResult(result, divisor);
    console.log(result);
}
divide1(61, 3)





















