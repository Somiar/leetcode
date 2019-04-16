/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
	if(lists.length === 0) {
		return null;
	}
	if(lists.length === 1) {
		return lists[0];
	}
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
	let newList = {};
	// for(let i = 1; i < lists.length; i++) {
	// 	newList = mergeList(newList, lists[i], {});
	// }

	function sort(lists, left, right) {
		if(left < right) {
			let mid = Math.floor((right-left)/2);
			let l1 = sort(lists, left, mid);
			let l2 = sort(lists, mid+1, right);
			newList = mergeList(l1, l2, {});
		} else {
			return lists[left];
		}
	}
	return newList;
};

mergeKLists();