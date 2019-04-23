/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
	let result = [];
	if(words.length === 0 || s.length === 0) {
		return result;
	}
	let wordsMap = {};
	for(let word of words) {
		if(wordsMap[word]) {
			wordsMap[word] += 1;
		} else {
			wordsMap[word] = 1;
		}
	}
	console.log(wordsMap);
	let findIndex = 0;
	let wordLen = words[0].length;
	let wordsLen = words.length * wordLen;
	let tempWordsMap = {}
	
	// 由于给定单词有重复，允许任意顺序排列
	// 如果先对所有单词全排列得到字符串去匹配，计算时间超时
	// 双指针方式，一个指针i在字符串s上滑动
	// 指针j从(i,i+wordsLen)的范围内检查该子串是否符合
	// 字典方式检查忽略了单词顺序，只需匹配到相应个数即可
	for(let i = 0; i <= s.length-wordsLen; i+=1) {
		let isRight = true;
		for(let j = i; j < i+wordsLen; j+=wordLen) {
			let word = s.slice(j, j+wordLen);
			if(wordsMap[word]) {
				if(!tempWordsMap[word]) {
					tempWordsMap[word] = 1;
				} else if(tempWordsMap[word] && tempWordsMap[word] < wordsMap[word]) {
					tempWordsMap[word] += 1;
				} else {
					tempWordsMap = {};
					isRight = false;
					break;
				}
			} else {
				tempWordsMap = {};
				isRight = false;
				break;
			}
		}
		if(isRight) {
			tempWordsMap = {};
			result.push(i);
		}
	}
	console.log(result);
};

findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake",
["fooo","barr","wing","ding","wing"])