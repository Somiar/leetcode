/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
	candidates.sort((a, b) => {
		return a - b
	});
	let result = [];
	if(target < candidates[0]) {
		return [];
	}
	function dfs(target, index, tempResult) {
		if(target === 0) {
			result.push([].concat(tempResult));
			return
		} else {
			for(let i = index; i < candidates.length; i++) {
				if(candidates[i] <= target) {
					// 筛去重复元素组合，如[1,7]
					if(i !== index && candidates[i] === candidates[i-1]) {
						continue;
					}
					tempResult.push(candidates[i]);
					dfs(target - candidates[i], i + 1, tempResult);
					tempResult.pop();
				} else {
					return;
				}
			}
		}
	}
	dfs(target, 0, []);
	console.log(result);  
};

combinationSum2([10,1,2,7,6,1,5], 8);