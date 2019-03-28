// 版本1 (时间256ms,内存52M)
var convert1 = function(s, numRows) {
	let strLen = s.length;
	if(strLen<3 || (numRows == 1)){
		console.log(s);
		return s;
	} else {
		let newStrArray = new Array();
		let zCount = parseInt(strLen/(numRows-1))+1;
		for(let m = 0; m < numRows; m++){
			newStrArray[m] = new Array();
			for(let n = 0; n < zCount; n++){
				newStrArray[m][n]=''
			}
		}
		let sIndex = 0;
		for(let i = 0; i < zCount; i++){
			if(i%2==0){
				for(let j = 0; j < numRows; j++){
					if(sIndex > strLen){
						break;
					}
					if(i>0 && j==0){
						newStrArray[j][i]='';
					} else {
						newStrArray[j][i]=s[sIndex];
					}
					sIndex += 1;
				}
			} else {
				for(let j = numRows-1; j >= 0; j--){
					if(sIndex > strLen){
						break;
					}
					if(j == (numRows-1)){
						newStrArray[j][i]='';
					}else{
						newStrArray[j][i]=s[sIndex];
					}
					sIndex += 1;
				}
			}
			sIndex-=1;

		}
		let newStr = '';
		for(let k = 0; k< numRows; k++){
			newStr += newStrArray[k].join('');
		}
		console.log(newStr);
	}
    
};

// 版本2 (时间152ms, 内存37M)
var convert2 = function(s, numRows) {
	if(s.length <= numRows) {
		console.log(s);
		return s;
	} else {
		let direction = 0;
		let rowIndex = 0;
		let newStr = new Array();
		let strLen = s.length;
		for(let i = 0; i < strLen; i++) {
			if(newStr[rowIndex] == undefined) {
				newStr[rowIndex] = '';
			}
			newStr[rowIndex]+= s[i];
			if(direction==0) {
				rowIndex+=1;
				if(rowIndex == numRows-1){
					direction = 1;
				}
			} else if(direction == 1) {
				rowIndex-=1;
				if(rowIndex == 0){
					direction = 0;
				}
			}
		}
		return newStr.join('');
	}
};
let result = convert2("PAYPALISHIRING", 3);
console.log(result);