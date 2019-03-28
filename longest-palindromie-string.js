var longestPalindrome = function(s) {
	let maxLen = 1;
	let startIndex = 0;
	let dp = new Array();
	for(let m = 0; m < s.length ; m++){
		dp[m] = new Array();
		for (let n = 0; n < s.length; n++){
			dp[m][n] = false;
		}
	}
	for(let i = 0; i < s.length; i++){
		for(let j = 0; j <= i; j++){
			if(i==j){
				dp[j][i] = true;
				break;
			}
			if (i - j == 1 ) {
				dp[j][i] = (s[i] == s[j]) ? true : false;

			} else {
				dp[j][i] = (dp[j+1][i-1] && (s[j] == s[i]))
			}
			if(dp[j][i] && i-j+1>maxLen){
				startIndex = j;
				maxLen = i-j+1;
			}
		}
	}
	console.log(startIndex, maxLen, s.slice(startIndex, maxLen+startIndex))
};
longestPalindrome('aaabaaaaaa')