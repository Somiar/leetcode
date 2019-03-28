var isPalindrome = function(x) {
	if(Math.abs(x) != x) {
		return false;
	} else {
		let quotient = x;
		// let remainder = 0;
		let newNum = 0;
		while(quotient > 0) {
			// remainder = quotient % 10;
			newNum = newNum * 10 + quotient % 10;
			quotient = parseInt(quotient / 10);
		}
		console.log(quotient, newNum);
		return x == newNum;
	}
};

var isPalindrome3 = function(x) {
	if(Math.abs(x) != x) {
		return false;
	} else {
		let s = String(x);
		let strLen = s.length;
		let isNum = true;
		for(let i = 0; i < parseInt(strLen/2); i++) {
			if(s[i] != s[strLen - 1 - i]) {
				isNum = false;
				break;
			}
		}
		return isNum;
	}
}

let result = isPalindrome2(1221);
console.log(result);