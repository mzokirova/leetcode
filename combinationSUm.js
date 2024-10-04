// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
// frequency
//  of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
var combinationSum = function(candidates, target) {
    const combinations=[];

    function track(start,current_combination,current_sum){
        if(current_sum===target){
            combinations.push([...current_combination])
            return
        }
        if(current_sum>target){
            return
        }
        for(let i=start;i<candidates.length;i++){
            current_combination.push(candidates[i])
            track(i,current_combination,current_sum+candidates[i]);
            current_combination.pop()
        }
    }
    track(0,[],0);
    return combinations;

};
