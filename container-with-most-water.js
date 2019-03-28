var maxArea = function(height) {
	let index = 0;
	let reIndex = height.length - 1;
	let area = 0;
	for(let i = 0; i < height.length; i++) {
		if(index >= reIndex) {
			break;
		}
		area = Math.max((reIndex-index)*Math.min(height[index], height[reIndex]),area);
		if(height[index] < height[reIndex]) {
			index += 1;
		} else {
			reIndex -= 1;
		}
	}
	console.log(area);
};

var result = maxArea([1,8,6,2,5,4,8,3,8]);
console.log(result);