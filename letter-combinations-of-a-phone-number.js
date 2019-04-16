var letterCombinations = function(digits) {
	
	let list = [];
	if(digits.length == 0) {
		return list;
	}
	let str = '';
	let index = 0;
	let numsMap = {
		'2': 'abc',
		'3': 'def',
		'4': 'ghi',
		'5': 'jkl',
		'6': 'mno',
		'7': 'pqrs',
		'8': 'tuv',
		'9': 'wxyz'
	};
	function combination(digits, str, index, list, map) {
		if(index == digits.length) {
			list.push(str);
			return;
		}
		for(let c of numsMap[digits[index]]) {
			combination(digits, str + c, index + 1, list, map);
		}
	}
	combination(digits, str, index, list, numsMap);
	return list;
};

var result = letterCombinations('23');
console.log(result);