import os, sys
class Solution(object):

	def decToBin(self, maxn, minn):
		maxn = str(bin(maxn).replace('0b', ''))
		minn = str(bin(minn).replace('0b', ''))
		return maxn, minn

	def hammingDistance(self, x, y):
		count = sys.stdout
		count = 0
		if(x == y):
			return 0
		else:
			if(x > y): 
				maxNum = x
				minNum = y
			else:
				maxNum = y
				minNum = x
			maxNum, minNum = self.decToBin(maxNum, minNum)
			lenMinNum = len(minNum)
			lenMaxNum = len(maxNum)
			gap = lenMaxNum - lenMinNum
			for i in xrange(lenMinNum, 0, -1):
				if(minNum[i-1] != maxNum[gap + i-1]): 
					count += 1
			for j in xrange(gap):
				if(maxNum[j] == '1'):
					count += 1
			print count
			return count
def main():
	x = 1
	y = 4
	Solution().hammingDistance(x, y)

if __name__ == '__main__':
    main()

# solution

# x =3
# y = 1
# ans = 0
# while x or y:
# 	ans += (x % 2) ^ (y % 2)
# 	x /= 2
# 	y /= 2
# 	print ans
