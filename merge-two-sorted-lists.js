/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	if(l1 === null) {
		return l2;
	}
	if(l2 === null) {
		return l1;
	}
	let newList = {};
	function mergeList(l1, l2, newList) {
		if(l1 === null) {
			return l2;
		}
		if(l2 === null) {
			return l1;
		}
		if(l1.val < l2.val) {
			newList.val = l1.val;
			newList.next = mergeList(l1.next, l2, {});
		} else {
			newList.val = l2.val;
			newList.next = mergeList(l1, l2.next, {});
		}
		return newList;

	}
	mergeList(l1, l2, newList);
		
	console.log(newList);
	
};

var l1 = {
	val: 1,
	next: {
		val: 2,
		next: {
			val: 4,
			next: null
		}
	}
}
var l2 = {
	val: 1,
	next: {
		val: 3,
		next: {
			val: 4,
			next: null
		}
	}
}
mergeTwoLists(l1, l2);