/**
 * @param {number[]} nums
 * @return {number}
 */
 // 解法一：将给定数组排序，遍历排序后的数组元素，
 // 从1开始与元素比较，忽略小于0和大于当前最小未出现正整数的元素
 // 匹配到与当前最小正整数相等元素时，最小正整数+1
 // 使用了js的sort方法排序才达到时间O(n)要求
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
	return result;
};

// 解法二
// 建立一个nums.length+1大小的数组空间
// 遍历原nums数组，将其中大于等于1并小于等于nums长度的元素
// 存放于新数组中对应位置
// 遍历新数组，下标与值不同的下标即为结果
// 如果遍历完成后无结果，则新数组长度即为结果
var firstMissingPositive1 = function(nums) {
	let newNums = new Array(nums.length+1).fill(0);

	for(let i = 0; i < nums.length; i++) {
		if(nums[i] <= nums.length && nums[i] >= 1) {
			newNums[nums[i]] = nums[i];
		} 
	}

	let result = 1;
	for(let j = 0; j < newNums.length; j++) {
		if(j !== newNums[j]) {
			result = j;
			return result;
		}
	}
	return newNums.length;
}


firstMissingPositive1([3,4,-1,1]);