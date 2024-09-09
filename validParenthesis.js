// Valid Parenthesis
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = function(s) {
    let stackArr=[];
     for(var i=0;i<s.length;i++){
         let lastOpened=stackArr[stackArr.length-1];
         if(s[i]== '(' || s[i]=='{' || s[i]=='['){
             stackArr.push(s[i]);
         }
         else if((s[i]== ')' && lastOpened=='(' ) || ( s[i]=='}' && lastOpened=='{' ) || ( s[i]==']' && lastOpened=='[' ) ){
             stackArr.pop();
         }
         else{
             return false;
         }
     }
         return stackArr.length >0 ? false :true; 
 };