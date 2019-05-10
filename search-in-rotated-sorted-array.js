/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 // 给定数据无重复元素
var search = function(nums, target) {
	if(!nums || nums.length === 0) {
		return -1;
	}  
	if(target === nums[0]) {
		return 0;
	} else if(target < nums[0]) {
		let index = nums.length - 1;
		while(nums[index] >= target && nums[index] < nums[0]) {
			if(nums[index] === target) return index;
			index--;
		}
	} else {
		let index = 1;
		while(nums[index] <= target && nums[index] > nums[0]) {
			console.log(index);
			if(nums[index] === target) return index;
			index++;
		}
	}
	return -1;
};

// 给定数组具有重复元素
var search1 = function(nums, target) {
	if(!nums || nums.length === 0) {
		return false;
	}  
	if(target === nums[0]) {
		return true;
	} else if(target < nums[0]) {
		let index = nums.length - 1;
		while(nums[index] >= target && nums[index] <= nums[0]) {
			if(nums[index] === target) return true;
			index--;
		}
	} else {
		let index = 1;
		while(nums[index] <= target && nums[index] >= nums[0]) {
			if(nums[index] === target) return true;
			index++;
		}
	}
	return false;
}

var result = search([1,3,5], 5)
console.log(result);