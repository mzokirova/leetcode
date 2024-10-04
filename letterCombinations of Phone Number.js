// 17.Letter combinations of phone NumberGiven a string containing digits from 2-9 inclusive, 
// return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


var letterCombinations = function(digits) {

    if(!digits)return [];
    const combinations=[];
    
    const digitsToLetters={
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz"
    }
    
    function track(index,tempStorage){
        if(index===digits.length){
            combinations.push(tempStorage.join(''));
            return;
        }
        const letters=digitsToLetters[digits[index]];
    
        for(let letter of letters){
            tempStorage.push(letter);
            track(index+1,tempStorage);
            tempStorage.pop();
        }
    }
    track(0,[])
    return combinations
    };