nums = [2, 7, 11, 15]
target = 9

#solution1
for i in range(len(nums)):
	if target-nums[i] in nums[i+1:]:
		print i, i+1+nums[i+1:].index(target-nums[i])
		break;

#solution2
for i,j in enumerate(nums):
	if target-j in nums[i+1:]:
		print j

		