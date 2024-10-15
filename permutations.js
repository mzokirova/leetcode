// 46. Permutations
// Solved
// Medium

// Topics
// Companies
// Given an array nums of distinct integers, return all the possible 
// permutations
// . You can return the answer in any order.

var permute = function(nums) {
    const results=[];
    heapFunction(nums.length,nums,results)
    return results;
    };
    function heapFunction(length,arr,results){
    if(length===1){
        results.push([...arr])
        return
    }
    
    for(let i=0;i<length;i++){
    
       heapFunction(length-1,arr,results);
       var j= length%2==0 ? i :0;
       [arr[j],arr[length-1]]=[arr[length-1],arr[j]]
    }
    }