var lengthOfLongestSubstring = function(s) {
	console.log(s.length);
	if(s.length==0){
		return 0;
	}
	if(s.length==1){
		return 1;
	}
	let maxCount = 0,
		currentCount = 0;
	let maxStr = s[0];
	let subStr = s[0];
	for(let i=1; i<s.length; i++ ){
		let repeatIndex = subStr.indexOf(s[i])
		if(repeatIndex<0){
			subStr += s[i];
		} else {
			currentCount = subStr.length;
			subStr=subStr.slice(repeatIndex+1)+s[i];
			console.log(subStr)
			maxCount = currentCount>maxCount?currentCount:maxCount;	
		}
	}
	currentCount = subStr.length;
	maxCount = currentCount>maxCount?currentCount:maxCount;
	console.log(maxCount)
	return maxCount;
};
lengthOfLongestSubstring('')