var isPalindrome = function (x) {
    let item = String(x);
    for (let i = 0; i < item.length / 2; i++) {
        if (item[i] !== item[item.length - 1 - i]) {
            return false;
        }
    }

    return true;
};