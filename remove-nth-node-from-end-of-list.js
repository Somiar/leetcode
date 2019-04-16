/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	let list = [head];
	while(head.next != null) {
		list.push(head);
		head = head.next;
	}
	console.log(list);
	if(list.length == 1) {
		return null;
	} else if(list.length > 1 && list.length == n) {
		return list[1];
	} else {
		list[list.length-n].next = list[list.length-n+1];
		return list[0];
	}
};

function ListNode(val) {
	this.val = val;
	this.next = null;
}

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
removeNthFromEnd(a, 1);
