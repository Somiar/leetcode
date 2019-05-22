/**
 * @param {number[]} nums
 * @return {number}
 */
// 287.寻找重复数
// 要求：不求改原数组，允许额外空间O(1),时间复杂度O(n^2)

// 解法一：直接嵌套两层for循环暴力求解，T = O(n^2)
// 测试耗时300ms~500ms
var findDuplicate = function(nums) {
	for(let i = 0; i < nums.length-1; i++) {
		for(let j = i+1; j < nums.length; j++) {
			if(nums[i] === nums[j]) {
				return nums[i];
			}
		}
	}
};

// 解法二
// 利用Floyd判环算法
// 耗时76ms
var findDuplicate1 = function(nums) {
	let fast = 0,
		slow = 0;
	while(true) {
		slow = nums[slow];
		fast = nums[nums[fast]];
		if(slow === fast) {
			fast = 0;
			while(nums[slow] !== nums[fast]) {
				fast = nums[fast];
				slow = nums[slow];
			}
			return nums[slow];
		}
	}
}
findDuplicate1([2,5,9,6,9,3,8,9,7,1])