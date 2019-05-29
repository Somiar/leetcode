/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 // 43.字符串相乘
var multiply = function(num1, num2) {
	if(num1 === '0' || num2 === '0') {
		return '0'
	}
	let nums = new Array(num1.length+num2.length).fill(0);
	for(let i = num1.length - 1; i >= 0; i--) {
		let temp = 0;
		for(let j = num2.length - 1; j >= 0; j--) {
			console.log(i + j + 1, num1[i], num2[j])
			nums[i + j + 1] += (Number(num1[i]) * Number(num2[j]));
			temp = parseInt(nums[i + j + 1] / 10);
			nums[i + j + 1] = nums[i + j + 1] % 10;
			nums[i + j] += temp;
		}
	}
	let result = nums.join('');
	result = nums[0] === 0 ? result.slice(1) : result;
	console.log(result);
};

multiply('123', '456');