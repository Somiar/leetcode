s = "ckilbkd"
s1='pwwke'
ns = ''
allns = []
for i,j in enumerate(s):
	if j not in ns:
		ns +=j
	else:
		allns.append(ns)
print allns
