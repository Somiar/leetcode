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

	// 使用dfs算法会超时
	function dfs(target, index, tempResult) {
		if(target === 0) {
			// result.push([].concat(tempResult));
			count+=1;
			return
		} else {
			for(let i = 0; i < nums.length; i++) {
				if(nums[i] <= target) {
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
	// dfs(target, 0, []);

	// 动态规划方案
	// target = 4时即dp[4]的组合方案应该为
	// dp[4]=dp[4-nums[0]] + dp[4-nums[1]] + dp[4-nums[2]]
	let dp = new Array(target+1).fill(0);
	dp[0] = 1;
	for(let i = 1; i <= target; i++) {
		for(let num of nums) {
			if(i >= num) {
				dp[i] += dp[i-num]
			}
		}
	}
	console.log(dp[target]);
};

combinationSum4([1,2,3], 32);