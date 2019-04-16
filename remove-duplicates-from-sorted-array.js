/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let len = 0;
	while(len <= nums.length-1) {
		console.log(nums,len, nums.lastIndexOf(nums[len]) )
		nums.splice(len,nums.lastIndexOf(nums[len])-len);
		len+=1;
	}
	console.log(nums, len)
};

// removeDuplicates([0,0,1,1,1,2,2,3,3,4])

var removeElement = function(nums, val) {
	while(nums.indexOf(val)>=0) {
		nums.splice(nums.indexOf(val), 1);
	}
	return nums.length;
};

removeElement([0,1,2,2,3,0,4,2], 2)