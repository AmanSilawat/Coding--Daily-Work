/*
Jay and Silent Bob Weight Convertor

Jay and Silent Bob have been given a fraction of an ounce but they only understand grams. Given an ounce weighs 28.3495 grams, convert the amount of ounces to grams. Round the number of grams to one decimal place.
*/
function jayAndBob(num) {
    return (num * 28.3495).toFixed(1);
}

console.log(jayAndBob(1)); //  "28.3 grams"
console.log(jayAndBob(0.25)); //  "7 grams"
console.log(jayAndBob(10)); //  "283.5 grams"

/*
toFixed method result is

input 15.7784514

output
15.8
15.78
15.778

! non-capturing group patter in regex (?:-------)?

return String((num * 28.3495)).match(/^-?\d+(?:\.\d{0,1})?/)[0];

*/