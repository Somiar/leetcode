/**
 * @param {string} s
 * @return {boolean}
 */

 // 版本1
var isValid = function(s) {
	let len = s.length;
	if(s == '') {
		return true;
	}
	if(len % 2 !== 0) {
		return false;
	} else {
		while(s.indexOf('()') >= 0 || s.indexOf('[]') >=0 || s.indexOf('{}')>=0) {
			let s1 = s.indexOf('()')
			if(s1 >= 0 ) {
				s = s.slice(0, s1) + s.slice(s1+2);
			}
			let s2 = s.indexOf('[]')
			if(s2 >= 0) {
				s = s.slice(0, s2) + s.slice(s2+2);
			}
			let s3 = s.indexOf('{}')
			if(s3 >= 0) {
				s = s.slice(0, s3) + s.slice(s3+2);
			}
		}
		if(s == '') {
			return true;
		} else {
			return false;
		}
	}
};

// 版本2
var isValid1 = function(s) {
	let stack = [];
	let map = {')': '(', ']': '[', '}': '{'};
	for(let i of s) {
		if(map[i]) {
			if(stack.length == 0) {
				return false;
			}
			if(stack[0] == map[i]) {
				stack = stack.slice(1);
			} else {
				return false;
			}
		} else {
			stack.unshift(i);
		}
	}
	if(stack.length==0) {
		return true;
	} else {
		return false;
	}
}

var reuslt = isValid1('(])')
console.log(reuslt);