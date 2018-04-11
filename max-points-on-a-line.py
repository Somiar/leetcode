# Definition for a point.
class Point(object):
    def __init__(self, a=0, b=0):
        self.x = a
        self.y = b

import math
class Solution(object):
	def maxPoints(self, points):
		mpl = []
		if not points:
			return 0
		for point in points:
			if point.x==0:
				mpl.append(-1)
			else:
				pass
		return mp


p1 = Point(2,3)
p2 = Point(3,4)
points = []
print Solution().maxPoints(points)

print 2.0/3