// Given a roman numeral, convert it to an integer.
//  Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Status=easy
var romanToInt = function (s) {
    const symbols = {
        'I': 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000

    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let currentValue = symbols[s[i]];
        if (1 + i < s.length && symbols[s[i + 1]] > currentValue) {
            result = result - currentValue;
        } else {
            result = result + currentValue;
        }
    }
    return result
};
