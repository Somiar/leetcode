import math
s = "ABC"

def convert(s, numRows):
	s = list(s)
	if len(s) == 0:
		return ''
	ns = ['' for i in range(numRows)]
	if numRows ==1:
		return ''.join(s)
	if numRows ==2:
		groupCount = numRows*2-1
		maxGroupCount = len(s)/groupCount
	if numRows >=3:
		groupCount = numRows*2-2
		maxGroupCount = len(s)/groupCount
	for j in range(numRows):
		ss = s[j:]
		if j==0 or j==numRows-1:
			for i in range(maxGroupCount+1):
				if i*groupCount<len(ss):
					if j==0:
						ns[j] += ss[i*groupCount]
					if j == numRows-1:
						ns[j] += ss[i*groupCount]
		else:
			for n in range(len(ss)/(numRows-1)+1):
				if n*(numRows-1)<len(ss):
					ns[j] += ss[n*(numRows-1)]
	return ''.join(ns)
# print convert(s,2)
