let judgeCircle = function(moves) {
    let strList = moves.split('');
    let LR = 0;
    let UD = 0;
    if(strList.length % 2 !== 0) {
        return false
    } else {
        for(let i of strList) {
            if(i === "U") {
                UD += 1;
            } else if(i === "D") {
                UD -= 1;
            } else if(i === "L") {
                LR += 1;
            } else if(i === "R") {
                LR -= 1;
            }
        }
        if(LR === 0 && UD === 0) {
            return true
        } else {
            return false
        }
    }
};

console.log(judgeCircle('UDD'));