/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	if(height.length <= 2) {
		return 0;
	}
	let st = [];
	let i = 0;
	while(height[i] == 0) {
		i += 1;
	}
	let result = 0;
	for(let index = i; index < height.length; index++) {
        while (st.length !== 0 && height[index] > height[st[st.length-1]]) {
            let top = st[st.length-1];
            st.pop();
            if (st.length === 0) break;
            let distance = index - st[st.length-1]- 1;
            let bounded_height = Math.min(height[index], height[st[st.length-1]]) - height[top];
            result += distance * bounded_height;
        }
        // st.push(index++);
        st.push(index);
    }
	console.log(result);
};
// [0,1,0,2,1,0,1,3,2,1,2,1]
trap([0,1,0,2,1,0,1,3,2,1,2,1])