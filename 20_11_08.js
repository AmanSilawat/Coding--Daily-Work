// Q. Flat a Mutiple Dept array with recurion

// function flat(arr, res = []) {
//     for (const ele of arr) {
//         if ( !Array.isArray(ele) ) {
//             res.push(ele);
//         } else {
//             let x = flat(ele, res);
//         }
//     }
//     return res;
// }

// let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(flat(arr));


// ..
// Q. Flat a Mutiple Dept array with loop
function flat(arr) {
    let res = [];
    while (arr.length) {
        let currVal = arr.pop();
        if (Array.isArray(currVal)) {
            arr.push(...currVal)
        } else {
            res.push(currVal);
        }
    }
    return res.reverse();
}

let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(flat(arr));