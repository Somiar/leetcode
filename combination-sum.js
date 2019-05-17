/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	candidates.sort((a, b) => {
		return a - b
	});
	let result = [];
	if(target < candidates[0]) {
		return [];
	}
	function dfs(target, index, tempResult) {
		if(target === 0) {
			console.log(tempResult);
			result.push([].concat(tempResult));
			return
		} else {
			for(let i = index; i < candidates.length; i++) {
				if(candidates[i] <= target) {
					tempResult.push(candidates[i]);
					dfs(target - candidates[i], i, tempResult);
					tempResult.pop();
				}
			}
		}
	}
	dfs(target, 0, []);
	console.log(result);
};

combinationSum([2,3,4,5,6,7], 10)