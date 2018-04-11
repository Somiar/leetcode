ops = ["5","-2","4","C","D","9","+","+"]
r = [int(ops[0])]
for i in ops[1:]:
    if i == 'C':
        r = r[:-1]
        continue
    if i == 'D':
        r.append(int(r[-1])*2)
        continue
    if i == '+':
        r.append(int(r[-1]) + int(r[-2]))
        continue
    r.append(int(i))
print sum(r)
        