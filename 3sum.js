var threeSum = function(nums) {
	let newArray = [];
	if (nums.length < 3) {
		return newArray;
	}
	nums = nums.sort(function(a, b) {
		return a - b;
	});
	for(let i = 0; i < nums.length-2; i++) {
		if(nums[i] > 0) {
			break;
		}
		let leftIndex = i + 1;
		let rightIndex = nums.length - 1;
		if(i > 0 && nums[i] == nums[i-1]) {
			continue;
		}
		while(leftIndex < rightIndex) {
			if(nums[leftIndex] == nums[leftIndex - 1] && leftIndex-1!=i) {
				leftIndex++;
			} else if(nums[rightIndex] == nums[rightIndex+1]) {
				rightIndex--;
			} else if(nums[leftIndex] + nums[rightIndex] < -nums[i]) {
				leftIndex++;
			} else if(nums[leftIndex] + nums[rightIndex] > -nums[i]) {
				rightIndex--;
			} else {
				newArray.push([nums[i], nums[leftIndex], nums[rightIndex]])
				leftIndex++;
				rightIndex--
			}
		}
	}
	tempStrArray = [];
	return newArray;
};

var result = threeSum([-1,0,1,2,-1,-4])
console.log(result);