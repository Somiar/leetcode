/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
	// if(!head || k <= 1 || head.next === null) {
	// 	return head;
	// }
	let nodeList = [1,2,3,4,5,6,7];
	// while(head !== null) {
	// 	nodeList.push(head);
	// 	head = head.next;
	// }
	let reNodeList = [];
	if(nodeList.length < k) {
		return head;
	} else {
		let newList = {};
		let count = Math.floor(nodeList.length/k);
		for(let i = 0; i < count; i++) {
			for(let j = k-1; j >= 0; j--) {
				reNodeList.push(nodeList[i*k+j])
			}
		}
		reNodeList = reNodeList.concat(nodeList.slice(count*k))
	}
	let newHead = {};
	let index = 0;
	function genNodeList(index, newHead) {
		if(index === reNodeList.length - 1) {
			newHead = {
				val: reNodeList[index],
				next: null
			}
			return newHead;
		}
		console.log(reNodeList[index], index)
		newHead.next = genNodeList(index+1, {});
		newHead.val = reNodeList[index];
		return newHead;
	}
	newHead = genNodeList(0, {});
	console.log(newHead)
};

reverseKGroup(null, 3);