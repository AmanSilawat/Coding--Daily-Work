// Q. 1 output
function foo() {
    let a = b = 0;
    a++;
    return a;
}

foo();
console.log(typeof a); // output ?
console.log(typeof b); // output ?


// Q. 2 output
let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i); // output ?
    }
    setTimeout(log, 100);
}


//  Q. 3
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]); // output ?


//  Q. 4
function abc() {

    console.log(a); // output ?

    var a = 10;

    console.log(b); // output ?

    let b = 20

}


// Q. 5
// find distinct/unique values from an Array
let arr = [1, 1, 2, 3, 3, 4, 5];
// output is 1, 2, 3, 4, 5




/* 
Ans. 1 
undefined, number

Ans. 2
3, 3, 3

Ans. 3
undefined

Ans. 4
undefined, reference error

Ans 5
console.log([...new Set(arr)])

*/