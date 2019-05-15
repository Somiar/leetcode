/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 // 版本1 运行5088ms
var solveSudoku = function(board) {
	
	function isValidSudoku(board) {
		let cols = new Array();
		let grids = new Array();
		for(let m = 0; m < 9; m++) {
			cols.push({1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, '.':0});
			grids.push({1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, '.':0});
		}
		for(let i = 0; i < 9; i++) {
			let row = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, '.':0};
			for(let j = 0; j < 9; j++) {
				row[board[i][j]] += 1;
				cols[j][board[i][j]] += 1;
				grids[parseInt(i/3)*3+parseInt(j/3)][board[i][j]] += 1;
				if( board[i][j] !== '.' &&
					(row[board[i][j]] > 1 ||
					cols[j][board[i][j]] > 1 || 
					grids[parseInt(i/3)*3+parseInt(j/3)][board[i][j]] > 1)) {
					return false;
				}
			}
		}
		return true
	}
	// isValidSudoku(board);

	// 从1-9每个数字不断测试验证
	function dfs(board, x, y) {
		if(x > 8 || y > 8) {
			return true;
		}
		if(board[x][y] === '.') {
			for(let num = 1; num <= 9; num++) {
				board[x][y] = String(num);
				if(isValidSudoku(board)) {
					let nextX = x;
					let nextY = y+1;
					if(nextY == 9){
						nextY = 0;
						nextX++;
					}
					if(dfs(board, nextX, nextY)) {
						return true;
					}
					board[x][y] = '.';
				} else {
					board[x][y] = '.';
				}
			}
			return false;
		} else {
			let nextX = x;
			let nextY = y+1;
			if(nextY == 9){
				nextY = 0;
				nextX++;
			}
			return dfs(board, nextX, nextY);
		}
	}
	dfs(board, 0, 0);
	console.log(board);
	return board;
};


// 版本2 运行时间88ms
// 在有效性验证部分，填充一个数字后无需验证整个数独板块的有效性
// 只需验证该数字所在行、列、3*3板块中的有效性
var solveSudoku1 = function(board) {
	function isValidSudoku(row, col, num) {
		for(let r = 0; r < 9; r++) {
			if(board[r][col] === num) return false;
		}
		for(let c = 0; c < 9; c++) {
			if(board[row][c] === num) return false;
		}
		for(let i = 0; i < 3;  i++) {
			for(let j = 0; j < 3; j++) {
				if(board[parseInt(row/3)*3+i][parseInt(col/3)*3+j] === num) return false;
			}
		}
		return true;
	}
	function dfs(x, y) {
		if (x === 9) return true;
		if (y === 9) return dfs(x + 1, 0);
		if(board[x][y] === '.') {
			for(let num = 1; num <= 9; num++) {
				if(isValidSudoku(x, y, String(num))) {
					board[x][y] = String(num);
					if(dfs(x, y+1)) return true;
					board[x][y] = '.';
				}
			}
		} else {
			return dfs(x, y+1);
		}
		return false;
	}
	dfs(0, 0);
	console.log(board);
	return board;
}



var board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
solveSudoku1(board);