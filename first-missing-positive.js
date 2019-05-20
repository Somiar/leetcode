/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
	let result = 1;
	nums.sort((a, b) => {
		return a - b
	});
	for(let num of nums) {
		if(num <= 0 || num > result) {
			continue;
		}
		if(num === result) {
			result+=1;
		}

	}
	console.log(result);
};
firstMissingPositive([2,1]);