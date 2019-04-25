/**
 * @param {string} s
 * @return {number}
 */
// 版本1；耗时530ms
var longestValidParentheses = function(s) {
	if(s === '') {
		return 0;
	}
	let maxLen = 0;
	let startIndex = 0;
	let stack = [],
		tempResult = [];
	// 遍历整个字符串，将获得的所有效子串的下标存入
	for(let i = 0; i < s.length; i++) {
		if(s[i] === '(') {
			stack.push({'key':i, 'value': s[i]})
		} else if(s[i] === ')' && stack.length > 0) {
			startIndex = stack.pop()['key'];
			tempResult.push(startIndex, i);
		}
	}
	function sortNums(a, b) {
		return a - b;
	}
	// 将整个下标排序
	tempResult.sort(sortNums);
	let subLen = 0;
	// 找到最长连续下标即为最长有效子串
	for(let i = 1; i < tempResult.length; i++) {
		if(tempResult[i] - tempResult[i-1] === 1) {
			subLen += 1;
			console.log(subLen);
		} else {
			maxLen = Math.max(maxLen, subLen);
			subLen = 0;
		}
	}
	maxLen = Math.max(maxLen, subLen);	
	if(maxLen > 0) {
		maxLen += 1;
	}
	console.log(maxLen)
};


// 版本二，耗时120ms
var longestValidParentheses1 = function(s) {
    let stack = [-1];
    let max = 0;
    for (let i = 0; i < s.length; i += 1) {
        let c = s[i];
        if (c === ')' && stack.length > 1 && s[stack[stack.length - 1]] === '(') {
            stack.pop();
            max = Math.max(max, i - stack[stack.length - 1]);
        } else {
            stack.push(i);
        }
    }
    console.log(max)
    return max;
};
longestValidParentheses1("()()")