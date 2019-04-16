var fourSum = function(nums, target) {
	// debugger;
    let newArray = [];
    if(nums.length < 4) {
    	return [];
    }
    nums = nums.sort(function(a, b) {
		return a - b;
	});
	for(let firstIndex = 0; firstIndex < nums.length-2; firstIndex++) {
		if(firstIndex > 0 && nums[firstIndex] == nums[firstIndex-1]) {
			continue;
		}
		for(let lastIndex = nums.length-1; lastIndex > firstIndex + 2; lastIndex--) {
			if(lastIndex < nums.length-1 && nums[lastIndex] == nums[lastIndex+1]) {
				continue;
			}
			console.log(nums[lastIndex])
			let leftIndex = firstIndex+1;
			let rightIndex = lastIndex-1;
			while(leftIndex < rightIndex) {
				if(nums[leftIndex] == nums[leftIndex - 1] && leftIndex-1!=firstIndex) {
					leftIndex++;
				} else if(nums[rightIndex] == nums[rightIndex+1] && rightIndex+1!=lastIndex) {
					rightIndex--;
				} else if(nums[leftIndex] + nums[rightIndex] < target-(nums[firstIndex]+nums[lastIndex])){
					leftIndex++;
				} else if(nums[leftIndex] + nums[rightIndex] > target-(nums[firstIndex]+nums[lastIndex])) {
					rightIndex--;
				} else {
					newArray.push([nums[firstIndex], nums[leftIndex], nums[rightIndex], nums[lastIndex]])
					leftIndex++;
					rightIndex--
				}
			}
		}
	}
    return newArray;
};

var result = fourSum([1,-2,-5,-4,-3,3,3,5], -11)
console.log(result);