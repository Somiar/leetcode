/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if(strs.length === 0) {
		return '';
	}
	if(strs.length === 1) {
		return strs[0];
	}
	let curPrefix = '';
	for(let i = 0; i < strs[0].length; i++) {
		if(strs[0][i] && strs[1][i] && strs[0][i] === strs[1][i]) {
			curPrefix += strs[0][i];
		} else {
			break;
		}
	}
	for(let j = 2; j < strs.length; j++) {
		if(strs[j] === '') {
			curPrefix = '';
		} else {
			for(let k = 0; k < curPrefix.length; k++) {
				if(curPrefix[k] && curPrefix[k] === strs[j][k]) {
					continue;
				} else {
					curPrefix = curPrefix.slice(0,k);
				}
				if(curPrefix === '') {
					break;
				}
			}
		}
		
		if(curPrefix === '') {
			break;
		}
	}
	console.log(curPrefix);
	return curPrefix;
};

longestCommonPrefix(["ac","ac","a","a"])