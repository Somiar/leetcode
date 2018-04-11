class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
	def addTwoNumbers(self, l1, l2):
		l3 = curNode = ListNode(0)
		carry = 0
		while l1 or l2:
			l1 = l1 or ListNode(0)
			l2 = l2 or ListNode(0)
			temp = (l1.val or 0) + (l2.val or 0) + carry
			curNode.next = ListNode(temp%10)
			curNode = curNode.next
			carry = temp/10
			l1 = l1.next
			l2 = l2.next
		if carry != 0:
			curNode.next = ListNode(carry)
			curNode = curNode.next
		return l3.next

l1 = ListNode(5)
# l1.next = ListNode(4)
# l1.next.next = ListNode(3)

l2 = ListNode(5)
l2.next = ListNode(6)
# l2.next.next = ListNode(4)


print Solution().addTwoNumbers(l1,l2)
