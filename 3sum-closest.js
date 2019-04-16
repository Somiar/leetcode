var threeSumClosest = function(nums, target) {
	if (nums.length < 3) {
		return 0;
	}
	nums = nums.sort(function(a, b) {
		return a - b;
	});
	
	let closestResult = nums[0]+nums[1]+nums[nums.length-1];
	let dValue = Math.abs(target-closestResult);
	for(let i = 0; i < nums.length-2; i++) {
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
			} else {
				if(dValue > Math.abs(target - (nums[i] + nums[leftIndex] + nums[rightIndex]))) {
					closestResult = nums[i] + nums[leftIndex] + nums[rightIndex]
					dValue = Math.abs(target - closestResult)
				}
				if(nums[leftIndex] + nums[rightIndex] < target-nums[i]) {
					leftIndex++;
				} else if(nums[leftIndex] + nums[rightIndex] > target-nums[i]) {
					rightIndex--;
				} else {
					leftIndex++;
					rightIndex--
				}
			}
		}
	}
	return closestResult;
};

var result = threeSumClosest([1,1,1,0], 100)
console.log(result);