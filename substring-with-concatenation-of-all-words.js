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
	let tempWordsMap = {};
	let count = 0;
	while(findIndex < s.length) {
		let word = s.slice(findIndex, wordLen)
		if(wordsMap[word]) {
			if(tempWordsMap[word]) {
				if(tempWordsMap[word] < wordsMap[word]) {
					tempWordsMap[word] += 1;
				}
			} else {
				tempWordsMap[word] = 1;
			}
		}
		findIndex += wordLen;
	}
	console.log(result);
};

findSubstring("foobarfoobar",["foo","bar"])