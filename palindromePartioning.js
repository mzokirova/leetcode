// 131. Palindrome Partitioning

// Given a string s, partition s such that every 
// substring
//  of the partition is a 
// palindrome
// . Return all possible palindrome partitioning of s.

var partition = function(s) {
    const results=[];
    const num=s.length;

    const isPalindrome= Array.from({length:num},()=>Array(num).fill(false));

    for(let end=0;end<num;end++){
        for(let start=0;start<=end;start++){
            if(s[start]===s[end] && (end-start<=2 || isPalindrome[start+1][end-1] )){
                isPalindrome[start][end]=true;
            }
        }
    }

    function track(start,current_substr){
        if(start===num){
            results.push([...current_substr]);
            return
        }
         for (let end = start; end < num; end++) {
            if (isPalindrome[start][end]) {  
                current_substr.push(s.slice(start, end + 1));
                track(end + 1, current_substr);
                current_substr.pop();
            }
        }
    }
track (0,[]);
return results;
};