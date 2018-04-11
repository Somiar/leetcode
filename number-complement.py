x = 5
y = '{0:b}'.format(x)
z = ''
for i in y:
	z += str(int(i) ^ 1)
print int(z, 2)