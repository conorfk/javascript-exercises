const removeFromArray = function (array, ...args) {
    // This works for non-repeating bad values in array
    // args.forEach((arg) => {
    //     const i = array.indexOf(arg);
    //     if (i > -1) {
    //         array.splice(i, 1);
    //     }
    // });
    // return array;

    args.forEach((arg) => {
        for (let i = 0; i < array.length; i++){
            if (arg === array[i]) {
                array.splice(i, 1);
                i--;
            }
        }
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
