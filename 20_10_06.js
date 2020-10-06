// Algorithms: Binary Search
// Create a function that finds a target number in a list of prime numbers. Implement a binary search algorithm in your function. The target number will be from 2 through 97. If the target is prime then return "yes" else return "no".
// Examples
// var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
// isPrime(primes, 3) ➞ "yes"
// isPrime(primes, 4) ➞ "no"
// isPrime(primes, 67) ➞ "yes"
// isPrime(primes, 36) ➞ "no"

var primes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function isPrime(arr, val) {
    if (arr.length == 1) {
        if (val == arr[0]) {
            return 'yes';
        } else {
            return 'no';
        }
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return right[0] > val ? isPrime(left, val) : isPrime(right, val);

    // return isPrime(arr, val);
}

console.log(isPrime(primes, 81)); // "yes"
// isPrime(primes, 4)// "no"
// isPrime(primes, 67)// "yes"
// isPrime(primes, 36)// "no"
