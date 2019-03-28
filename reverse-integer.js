var reverse = function(x) {
    let s = String(x);
    let strLen = s.length;
    if(strLen > 1) {
    	let newStr = '';
    	let newStr1 = '';
    	let newStr2 = '';
    	let mindleChar = '';
    	if(s[0] == '-') {
    		newStr = '-';
    		s = s.slice(1);
    		strLen-=1;
    	}
    	let forIndex = parseInt(strLen / 2);
    	if(forIndex * 2 < strLen) {
    		mindleChar = s[forIndex];
    	}
    	let isOmit1 = true;
    	let isOmit2 = true;
    	let omitIndex = 0;
    	for(let i = 0; i < forIndex; i++) {
    		if(s[strLen-1-i] == '0' && !isOmit1) {
    			newStr1 = newStr1 + s[strLen-1-i];
    		}
    		if(s[strLen-1-i] != '0') {
    			isOmit1 = false;
    			omitIndex = 0;
    			newStr1 = newStr1 + s[strLen-1-i];
    		}
    		newStr2 = s[i] + newStr2;
    		if(s[i] == 0 && isOmit1) {
    			omitIndex += 1;
    		}
    		if(s[i] != 0 && omitIndex > 0){
    			omitIndex = 0;
    		}

    	}
    	newStr = newStr + (newStr1 + mindleChar + newStr2).slice(omitIndex);
    	let newNum = Number(newStr);
    	if(newNum > 2**31-1 || newNum < -(2**31)) {
    		return 0
    	} else {
    		return newNum;
    	}
    }

}

var reverse1 = function(x) {
	if(x.length < 2) {
		return x
	} else {
		let s = String(x);
		let newStr = '';
		if(s[0] == '-') {
			newStr = '-';
			s = s.slice(1);
		}
		s = s.split('').reverse().join('');
		let omitIndex = 0;
		for(let i = 0; i < s.length; i++) {
			if(s[i] > 0) {
				omitIndex = i;
				break;
			}
		}
		newStr = newStr + s.slice(omitIndex);
		let newNum = Number(newStr);
    	if(newNum > 2**31-1 || newNum < -(2**31)) {
    		return 0
    	} else {
    		return newNum;
    	}
	}
}

let result = reverse1(-1534236469000)
console.log(result)