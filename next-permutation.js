/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
	let index = 0;
	if(!nums || nums.length <= 1) {
		return nums;
	}
	function exchange(i, j) {
		let temp = nums[i];
		nums[i] = nums[j];
		nums[j] = temp;
	}
	let start = nums.length - 2;
	while(start >= 0 && nums[start] >= nums[start+1]) {
		start--;
	} 
	console.log(start);
	if(start >= 0) {
		let end = nums.length - 1;
		while(end >= start && nums[end] <= nums[start] ) {
			end--;
		}
		exchange(start, end);
	}
	let m = start + 1;
	let n = nums.length - 1;
	while(m < n) {
		exchange(m,n);
		m++;
		n--;
	}
	console.log(nums);
};

nextPermutation([1,5,1])