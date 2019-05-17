/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
	let result = [];
	
	function dfs(target, index, tempResult) {
		if(target === 0) {
			if(tempResult.length !== k) return;
			result.push([].concat(tempResult));
			return
		} else {
			for(let i = index; i < 10; i++) {
				if(i <= target) {
					tempResult.push(i);
					dfs(target - i, i + 1, tempResult);
					tempResult.pop();
				} else {
					return;
				}
			}
		}
	}
	dfs(n, 1, []);
	console.log(result); 
};
combinationSum3(3, 9);