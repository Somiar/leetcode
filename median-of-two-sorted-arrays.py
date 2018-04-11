nums1 = [1, 2]
nums2 = [3]
nums3 = sorted(nums1+nums2)
l = len(nums3)
if l%2==0:
	t = l/2
	return (nums3[t-1] + nums3[t])/2.0
else:
	return nums3[(l)/2]