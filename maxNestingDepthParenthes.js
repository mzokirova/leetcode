// 1614. Maximum Nesting Depth of the Parentheses
// Given a valid parentheses string s,
//  return the nesting depth of s. 
//  The nesting depth is the maximum number of nested parentheses.

function Depth (str){
    let depth=0;
    let maxDepth=0;
    for(let i=0;i<str.length;i++){
   
        if(str[i]=='('){
            depth++;
            if(depth>maxDepth){
            maxDepth=depth;
            }
        }
        else if(str[i]==")"){
            depth--;
        }
      
    }
return (maxDepth);
}
