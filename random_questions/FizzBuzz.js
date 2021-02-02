// 3: Fizz
// 5: Buzz
// 3 and 5 : FizzBuzz
// else number

// ! first step
// for (let i = 1; i <= 100; i++) {
//     let buzz = i % 5;
//     let Fizz = i % 3;
//     if (Fizz == 0 && buzz == 0) {
//         console.log("FizzBuzz");
//     } else if (buzz == 0) {
//         console.log("Buzz");
//     } else if (Fizz == 0) {
//         console.log("Fizz");
//     } else {
//         console.log(i)
//     }
// }


// for (let i = 1; i <= 100; i++) {
//     let fizz = i % 3 == 0 ? "Fizz" : "";
//     let buzz = i % 5 == 0 ? "Buzz" : "";
//     if (fizz + buzz == '') {
//         console.log(i);
//     } else {
//         console.log(`${fizz + buzz}`)
//     }
// }


// for (let i = 1; i <= 100; i++) {
//     let fizz = i % 3 == 0 ? "Fizz" : "";
//     let buzz = i % 5 == 0 ? "Buzz" : "";
//     let res = fizz + buzz;
//     if (res == '') {
//         console.log(i);
//     } else {
//         console.log(res)
//     }
// }


// for (let i = 1; i <= 100; i++) {
//     let fizz = '';
//     let buzz = '';
//     if (i % 3 == 0) {
//         fizz = "Fizz";
//     }
//     if (i % 5 == 0) {
//         buzz = "Buzz";
//     }
//     let res = fizz + buzz;
//     if (res == '') {
//         console.log(i);
//     } else {
//         console.log(res)
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     let res = '';
//     if (i % 3 == 0) {
//         res += "Fizz";
//     }
//     if (i % 5 == 0) {
//         res += "Buzz"
//     }
//     if (res == '') {
//         console.log(i);
//     } else {
//         console.log(res)
//     }
// }

// ! second step correct
for (let i = 1; i <= 100; i++) {
    let res = i % 3 == 0 ? "Fizz" : "";
    if (i % 5 == 0) {
        res += "Buzz"
    }
    if (res == '') {
        console.log(i);
    } else {
        console.log(res)
    }
}

// ! third step
// time complexity
// + - => O(n)
// * / => O(n^2)
for (let i = 1, three = 1, five = 1; i <= 100; i++, three++, five++) {
    let data = '';
    if (three == 3) {
        three = 0;
        data += "Fizz";
    }
    if (five == 5) {
        five = 0;
        data += "Buzz"
    }
    if (data == '') {
        console.log(i);
    } else {
        console.log(data)
    }
}