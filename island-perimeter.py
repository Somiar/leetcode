class Solution(object):
	def islandPerimeter(self, grid):
		perimeter = 0
		row = len(grid)
		if row == 0:
			return 0
		count = len(grid[0])
		if count == 0:
			return 0
		for r in range(row):
			for i in range(count):
				if grid[r][i]:
					perimeter +=4
					if i>0 and grid[r][i-1]:
						perimeter -=2
					if r>0 and grid[r-1][i]:
						perimeter -=2
		return perimeter


grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
# grid = [[0,1],[0,1]]

print Solution().islandPerimeter(grid)