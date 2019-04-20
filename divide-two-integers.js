/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var divide = function(dividend, divisor) {
	if (dividend === 0 || Math.abs(dividend) < Math.abs(divisor)) {
    	return 0;
	}
	
	let isMinus = false;
	let sum = dividend + divisor;
	if((sum > dividend && sum <divisor) || (sum > divisor && sum < dividend)) {
    	isMinus = true;
	} 
	dividend = Math.abs(dividend);
	divisor = Math.abs(divisor);
	let result = 0,
		minDifference = dividend;
	function getDivide(tempResult, tempDivisor) {
		tempDivisor += tempDivisor;
		if(tempDivisor <= dividend) {
			tempResult += tempResult;
			getDivide(tempResult, tempDivisor);
			if(minDifference - tempDivisor >= 0) {
				minDifference = minDifference - tempDivisor;
				console.log(tempResult, minDifference)
				result += tempResult;
			}
		}
		return;
	}
	getDivide(1, divisor);
	if(minDifference >= divisor) {
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
divide(7, -3)