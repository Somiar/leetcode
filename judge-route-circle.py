class Solution(object):
    def judgeCircle(self, moves):
    	leftRight = 0
    	upDown = 0
        if(len(moves)%2 != 0 ):
        	return False
        else:
        	for i in moves:
        		if(i == 'U'):
        			upDown +=1
        		elif(i == 'D'):
        			upDown -=1
        		elif(i == 'L'):
        			leftRight += 1
        		elif(i == 'R'):
        			leftRight -= 1
        	if(leftRight == 0 and upDown == 0):
        		return True
        	else:
        		return False

def main():
	moves = "UD"
	print Solution().judgeCircle(moves)

if __name__ == '__main__':
    main()

# solution
def judgeCircle(moves):
    return moves.count('L') == moves.count('R') and moves.count('U') == moves.count('D')

print judgeCircle('UD')