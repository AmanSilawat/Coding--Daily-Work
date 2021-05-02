/*Part1 -
    Write a function that takes a number 'N' and prints the first 'N' lines of the below sequence -
        printLines(5)
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
printLines(3)
1
1 2
1 2 3
*/

function printLines(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            result += j;
        }
        result += '\n';
    }
    return result;
}

console.log(printLines(5));