/*
Write a function that takes an Array of numbers and an integer 'k' as input. And returns the 'k' most frequent numbers (sorted by the decreasing order of their frequency)
*/

// solution 1
function getKMostFreq_(arr, num) {
    let count_n = {};
    for (let i = 0; i < arr.length; i++) {
        if (typeof count_n[arr[i]] == 'undefined') {
            count_n[arr[i]] = 1;
        } else {
            count_n[arr[i]] += 1;
        }
    }

    let arr_of_obj = []
    for (const key in count_n) {
        arr_of_obj.push({[key]: count_n[key]})
    }

    arr_of_obj.sort((a, b) => {
        return Object.values(b) - Object.values(a)
    });

    return arr_of_obj.slice(0, num).flatMap(val => Object.keys(val));
}

// solution 2
function getKMostFreq(arr, num) {
    let count_n = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof count_n[arr[i]] == 'undefined') {
            count_n[arr[i]] = 1;
        } else {
            count_n[arr[i]] += 1;
        }
    }

    let entries = Object.entries(count_n);
    entries.sort((a, b) => b[1] - a[1]);
    entries.splice(num, entries.length - num);
    return Object.keys(Object.fromEntries(entries));
}

console.log(getKMostFreq([5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 9, 9, 9, 9, 9, 9, 9, 9, 9, 5, 5, 5, 5, 5, 9, 9, 9, 6, 7, 8], 3));