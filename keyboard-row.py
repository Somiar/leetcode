t1 = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']

t2 = ["Hello", "Alaska", "Dad", "Peace"]
r = []
for i in t1:
	for j in t2:
		if set(i) | set(j.lower()) == set(i):
			r.append(j)
print r
