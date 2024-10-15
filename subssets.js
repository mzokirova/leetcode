// 78 subsetsGiven an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.


var subsets = function(nums) {
    const results=[];

    const dfc=(index,path)=>{
     
            results.push([...path])
           
        

        for(let i=index;i<nums.length;i++){
            path.push(nums[i]);
            dfc(i+1,path);
            path.pop();
        }
    }
 dfc(0,[])
    return results;
};