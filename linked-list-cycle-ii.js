/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 142. 环形链表 II
// 利用Floyd判环算法
var detectCycle = function(head) {
	if(head === null) {
		return null;
	}
	let slow = head,
		fast = head;
	while(true) {
		if(!slow.next || !fast.next || !fast.next.next) {
			return null;
		}
		slow = slow.next;
		fast = fast.next.next;
		if(slow === fast) {
			slow = head;
			while(slow !== fast) {
				slow = slow.next;
				fast = fast.next;
			}
			console.log(slow)
			return slow;
		}

	}
};

function ListNode(val) {
	this.val = val;
	this.next = null;
}

let node1 = new ListNode(3);
let node2 = new ListNode(2);
node1.next = node2;
node2.next = node1;

detectCycle(node1)