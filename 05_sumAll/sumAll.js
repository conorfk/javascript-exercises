const sumAll = function (low, high) {
    let sum = 0;
    if (typeof low != 'number' || typeof high != 'number') return "ERROR";
    if (low < 0 || high < 0) return "ERROR";
    
    if (low > high) {
        let temp = low;
        low = high;
        high = temp;
    }
    for (low; low <= high; low++){
        sum += low;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
