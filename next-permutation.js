/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
	let index = 0;
	function exchange(i, j) {
		let temp = nums[i];
		nums[i] = nums[j];
		nums[j] = temp;
	}
	// let isNext = false;
	// for(let i = nums.length-1; i > 0; i--) {
	// 	if(nums[i-1] < nums[i]) {
	// 		isNext = true;
	// 		if(i === nums.length-1) {
	// 			exchange(i, i-1)
	// 		}
	// 		console.log(i)
	// 		for(let j = 0; j < nums.length; j++) {
	// 			if(nums[j] < nums[i]) {
	// 				exchange(i, j);
	// 			}
	// 		}
	// 	}
	// }
	// if(!isNext) {
	// 	nums = nums.reverse();
	// }
	let i = nums.length - 2;
	while (i >= 0 && nums[i + 1] <= nums[i]) {
    	i--;
	}
	if (i >= 0) {
		let j = nums.length - 1;
		while (j >= 0 && nums[j] <= nums[i]) {
	    	j--;
		}
		exchange(i, j);
	}
	reverse(i+1);
	function reverse(start) {
        let i = start, j = nums.length - 1;
        while (i < j) {
            exchange(i, j);
            i++;
            j--;
        }
    }
	console.log(nums);
	return nums;
};

nextPermutation([1,3,2])