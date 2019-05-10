/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
	let result = [];
	if(!words ||words.length < 2) {
		return result;
	}
	function ispalindrome(s) {
		let sLen = s.length;
		let isValid = true;
		for(let k = 0; k < parseInt(sLen / 2); k++) {
			if(s[k] !== s[sLen - 1 - k]) {
				isValid = false;
				break;
			}
		}
		return isValid;
	}
	for(let i = 0; i < words.length-1; i++) {
		for(let j = i+1; j < words.length; j++) {
			if(ispalindrome(words[i]+words[j])) {
				result.push([i,j])
			}
			if(ispalindrome(words[j]+words[i])) {
				result.push([j,i])
			}
		}
	}
	console.log(result);
};
palindromePairs(["bat","tab","cat"])

var majorityElement = function(nums) {
	let result = 0;
	let numsMap = {};
	for(let i = 0; i < nums.length; i++) {
		if(!numsMap[nums[i]]) {
			numsMap[nums[i]] = 1;
		} else {
			console.log()
			numsMap[nums[i]]  += 1;
			if(numsMap[nums[i]]  > nums.length / 2) {
				result = nums[i];
			}
		}
	}
	console.log(result);
}
majorityElement([3,2,3])