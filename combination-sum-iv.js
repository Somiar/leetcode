/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
	nums.sort((a, b) => {
		return a - b
	});

	let result = [];
	let count = 0;

	function dfs(target, index, tempResult) {
		if(target === 0) {
			// result.push([].concat(tempResult));
			count+=1;
			return
		} else {
			for(let i = 0; i < nums.length; i++) {
				if(nums[i] <= target) {
					// 筛去重复元素组合，如[1,7]
					if(i !== index && nums[i] === nums[i-1]) {
						continue;
					}
					tempResult.push(nums[i]);
					dfs(target - nums[i], i, tempResult);
					tempResult.pop();
				} else {
					return;
				}
			}
		}
	}
	dfs(target, 0, []);
	console.log(count);
};

combinationSum4([1,2,3], 32);