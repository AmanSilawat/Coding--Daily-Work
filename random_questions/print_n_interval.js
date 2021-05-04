/*
Between each line, there should be a time gap of 1 second.
For eg -
printLines(5)
1
<wait for 1 sec>
1 2
<wait for 1 sec>
1 2 3
<wait for 1 sec>
1 2 3 4
<wait for 1 sec>
    1 2 3 4 5
*/

// solution 1
function interval(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function printLines(num) {
    for (let i = 1; i <= num; i++) {
        let result = '';
        for (let j = 1; j <= i; j++) {
            result += j;
        }
        console.log(result)
        await interval(2000);
    }

}
printLines(5);

// another pattern 1
log = n => {
    let l = '';
    for (let i = 1; i <= n; i++) {
        l += ` ${i} `;
    }
    console.log(l);
};
function print_line_2(n) {
    setTimeout(function () {
        let l = '';
        for (let i = 1; i <= n; i++) {
            l += ` ${i} `;
        }
        console.log(l);
        if (--n) print_line_2(n);
    }, 1000);
};
// ! uncomment and run
// print_line_2(5);

// another pattern 2
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function delayedGreeting() {
    console.log("Hello");
    await sleep(2000);
    console.log("World!");
    await sleep(2000);
    console.log("Goodbye!");
}
// ! uncomment and run
// delayedGreeting();