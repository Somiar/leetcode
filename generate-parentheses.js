/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	if(n < 1) {
		return [];
	}
	let list = ['()'];
	if(n === 1) {
		return list;
	}
	for(let i = 2; i <= n; i++) {
		let newList = [];
		for(let j of list) {
			for(let m = 0; m < j.length; m++) {
				if(j[m] == '(') {
					newList.push(j.slice(0, m+1)+'()'+j.slice(m+1))
				} 
			}
		}
		newList.push('()'.repeat(i));
		list = newList;
	}
	return list;
};


var generateParenthesis_1 = function(n) {
	if(n < 1) {
		return [];
	}
	function backTracking(s, newList, left, right) {
		// console.log(s, newList);
		if(left === 0 && right === 0) {
			newList.push(s);
			return
		}
		if(left < right) {
			backTracking(s+')', newList, left, right-1);
		}
		if(left > 0) {
			backTracking(s+'(', newList, left-1, right);
		}
	}
	let newList = [];
	backTracking('', newList, n, n);
	console.log(newList);
}

generateParenthesis_1(3);
