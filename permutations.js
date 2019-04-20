// 全排列
function swap(list, m, n) {
	let temp = list[m];
	list[m] = list[n];
	list[n] = temp;
}

let words = ['a', 'b', 'c'];

function permutation(start) {
	if(start === words.length) {
		// console.log(words);
		return;
	}
	for(let i = start; i < words.length; i++) {
		swap(words, start, i);
		permutation(start+1);
		swap(words, start, i);
	}
	return;
}
// permutation(0)

function permutation_1(result, n) {
	if(result.length === n) {
		console.log(result);
		return;
	} else {
		for(let i = 0; i < n; i++) {
			if(result.indexOf(words[i]) >= 0) {
				continue;
			}
			result.push(words[i]);
			permutation_1(result, n);
			result.pop(result.length-1)
		}
		
	}
}
// permutation_1([], words.length)

// 去重全排列
function permutation_repeat(start) {
	if(start === words.length) {
		result.push(words.join(''));
		return;
	}
	for(let i = start; i < words.length; i++) {
		if(!findRepeat(start, i, words[i])) {
			swap(words, start, i);
			permutation_repeat(start+1);
			swap(words, start, i);
		}
		
	}
	return;
}

// let startDate = new Date();
// let startTime = startDate.getTime();
// for(let k = 0; k < 10000; k++) {
// 	// permutation(0);
// 	permutation_1([], 6)
// }
// let endDate = new Date();
// console.log(endDate.getTime() - startTime);