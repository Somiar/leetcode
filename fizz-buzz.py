n = 15
a = [i for i in xrange(1, n+1)]
for j in range(len(a)):
	if a[j]%15==0:
		a[j] ='FizzBuzz'
		continue
	else:
		if a[j]%3==0:
			a[j]='Fizz'
			continue
		if a[j]%5==0:
			a[j]='Buzz'
			continue
	a[j] = str(a[j])
print a

