/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
	let len = nums.length;
	let result = [-1, -1];
	if(len === 0) {
		return result;
	}
	function search(start, end) {
		if(start === end && nums[start] !== target) {
			return result;
		}
		let index = parseInt((end-start)/2) + start;
		if(nums[index] == target) {
			let left = index,
				right = index;
			while(nums[left] == target) {
				left--;
			}
			while(nums[right] == target) {
				right++;
			}
			result = [left+=1, right-=1]
			return result;
		} else if(nums[index] < target) {
			search(index+1, end);
		} else if(nums[index] > target) {
			search(start, index);
		}
		return result;
	}
	search(0, len-1)
	console.log(result);
};
searchRange([5,6,6,7,7,10], 8)