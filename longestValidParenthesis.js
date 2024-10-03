// 32. Longest Valid Parentheses
// Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses 
// substring
// .



var longestValidParentheses = function(s) {
    let maxLength=0;
    let result=[-1];

    for(let i=0;i<s.length;i++){
        if(s[i]==="("){
            result.push(i)
        }else{
            result.pop()
        

        if(result.length===0){
            result.push(i)
        }else{
            maxLength=Math.max(maxLength,i-result[result.length-1])
        }
    }
    }
    return maxLength;
};
