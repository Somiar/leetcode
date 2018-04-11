class Solution(object):
	def nearestPalindromic(self, n):
		sLength = len(n)
		if n == '0':
			return n
		if sLength == 1:
			return str(int(n)-1)
		if sLength == 2 and int(n)<=11:
			return '9'
		n1 = list(n)
		n2 = list(n)
		if sLength%2 == 0:
			n2[sLength/2-1] = str(int(n2[sLength/2-1])+1)
		else:
			n2[sLength/2] = str(int(n2[sLength/2])+1)
		for i in range(1,sLength/2+1):
			n1[-i] = n1[i-1]
			n2[-i] = n2[i-1]
		if n1 == list(n):
			if sLength%2 == 0:
				n1[sLength/2-1] = str(int(n1[sLength/2-1])-1)
			else:
				n1[sLength/2] = str(int(n1[sLength/2])-1)
			for i in range(1,sLength/2+1):
				n1[-i] = n1[i-1]
			return ''.join(n1)
		else:
			n1 = int(''.join(n1))
			n2 = int(''.join(n2))
			if n1-int(n)<n2-int(n):
				return str(n1)
			else:
		# return ''.join(n1)
				return str(n2)
		


s = '100'
11
22
33
44
55
66
77
88
99
101
111
121
b = 1
print Solution().nearestPalindromic(s)
print str(b)