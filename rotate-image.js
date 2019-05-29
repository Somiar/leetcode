/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	let n = matrix.length;
	for(let i = 0; i < parseInt(n/2); i++) {
		let temp = [].concat(matrix[i]);
		for(let j = i; j < (n-i-1); j++) {
			matrix[i][j] = matrix[n-j-1][i];
			matrix[n-j-1][i] = matrix[n-i-1][n-j-1];
			matrix[n-i-1][n-j-1] = matrix[j][n-i-1];
		}
		for(let t = i; t < temp.length-i; t++) {
			matrix[t][n-i-1] = temp[t];
		}
		console.log(matrix);
	}
	// console.log(matrix);
};

rotate([
// [ 1, 2, 3, 4, 5],
// [ 6, 7, 8, 9,10],
// [11,12,13,14,15],
// [16,17,18,19,20],
// [21,22,23,24,25]
[ 1, 2, 3, 4],
[ 5, 6, 7, 8],
[ 9,10,11,12],
[13,14,15,16]
])
// [ 1, 2, 3, 4],
// [ 5, 6, 7, 8],
// [ 9,10,11,12],
// [13,14,15,16]