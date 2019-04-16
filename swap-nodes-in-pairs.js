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
var swapPairs = function(head) {
	if(!head || head.next === null) {
		return head;
	}
	let newList ={};
	function exchange(n1, n2, tempNew) {
		console.log(n2)
		if(n2 && n2.next) {
			tempNew = exchange(n2.next, n2.next.next, tempNew);
		}
		if(n1 === null ) {
			return null;
		}
		if(n2 === null) {
			return n1;
		}
		let temp1 = n1;
		let temp2 = n2;
		temp1.next = temp2.next;
		newList = temp2;
		newList.next = temp1;
		newList.next.next = tempNew;
		return newList;
	}
	newList = exchange(head, head.next, null)
	console.log(newList);
};

let n = {
	val: 1,
	next: {
		val: 3,
		next: {
			val: 4,
			next: null
		}
	}
}

swapPairs(n);