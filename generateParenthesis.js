// 22. Generate Parentheses
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]



var generateParenthesis = function(n) {
    let result=[];
 
    function track(current,opening,closing){
     if((current.length)== 2 * n){
         result.push(current);
         return;
     }
 
     if(opening<n){
         track(current + "(",opening+1,closing)
     }
     if(closing<opening){
         track(current+ ")",opening,closing+1);
     }
    }
    track("",0,0)
    return result
 };