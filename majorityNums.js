

var majorityElement = function (nums) {
    let candidate;
    let counter = 0;
    nums.forEach(num => {
        if (counter === 0) {
            candidate = num;
            counter = 1;
        } else if (num === candidate) {
            counter++;
        }
        else {
            counter--;
        }

    });
    const candidateCount = nums.filter(num => num === candidate).length;
    if (candidateCount > nums.length / 2) {
        return candidate;
    } else {
        return null;
    }
};