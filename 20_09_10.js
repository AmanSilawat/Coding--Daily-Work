// 191 ==>	Vowel Families
// 	Write a function that selects all words that have all the same vowels (in any order and/or number) as the first word, including the first word.
// Words will contain only lowercase letters, and may contain whitespaces.
// Frequency does not matter (e.g. if the first word is "loopy", then you can include words with any number of o's, so long as they only contain o's, and not any other vowels).
function sameVowelGroup(arr) {
    let res = {};
    let vowels = ["a", "e", "i", "o", "u"];
    let mxLength = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let x = [...new Set(arr[i].split('').filter(char => vowels.includes(char)).sort())].join('');
        try {
            res[x].push(arr[i]);
        }
        catch (e) {
            res[x] = [arr[i]];
        }
        if (res[x].length > mxLength) {
            mxLength = res[x].length;
            result = res[x];
        }
    }
    return result;
}
// console.log(sameVowelGroup(["toe", "ocelot", "maniac"])); // ["toe", "ocelot"]
// console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"])); // ["many"]
// console.log(sameVowelGroup(["hoops", "chuff", "bot", "bottom"])); // ["hoops", "bot", "bottom"]


// 192 ==>	Shortest Unsorted Continuous Subarray
// 	Given an integer array, you need to find the shortest continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.
// 	Create a function that returns the length of that subarray.
// The given array can contain duplicates, so ascending order here means <= (see example #3).
// If the given array is already sorted or is empty, return 0.

function findUnsortedSubarray(arr) {
    // pattern 1
    // minIndexVal = Infinity;
    // maxIndexVal = -Infinity;
    // for (let i = 1; i < arr.length; i++) {
    //     // for (let j = 1; j < arr.length; j++) {
    //         if( !(arr[i-1] < arr[i]) && arr[i-1] != arr[i]){
    //             [arr[i-1], arr[i] ] = [ arr[i], arr[i-1] ]
    //             if ( minIndexVal > i-1 ) {
    //                 minIndexVal = i-1
    //             }
    //             if ( maxIndexVal < i ) {
    //                 maxIndexVal = i
    //             }
    //             // console.log(i-1, i)
    //         }
    //     // }
    // }
    // if (maxIndexVal == -Infinity) {
    //     maxIndexVal = 0;
    // }
    // if (minIndexVal == Infinity) {
    //     minIndexVal = 0;
    // }
    // return maxIndexVal-minIndexVal || 0;

    // pattern 2
    if (arr[0] == Math.min(...arr)) {
        return findUnsortedSubarray(arr.slice(1));
    }
    if (arr[arr.length - 1] == Math.max(...arr)) {
        return findUnsortedSubarray(arr.slice(0, -1));
    }
    return arr.length;
}
// console.log(findUnsortedSubarray([1, 3, 2, 5, 8, 7, 13]));// 5
// You need to sort [3, 2, 5, 8, 7] in ascending order to make 
// the whole array sorted in ascending order.
// console.log(findUnsortedSubarray([10, 7, 5, 3]));// 4
// console.log(findUnsortedSubarray([2, 4, 4, 4, 4, 3]));// 5
// console.log(findUnsortedSubarray([1, 2, 3, 4, 4, 5]));// 0
// 1, 2, 3, 4, 4, 5
//    2, 3, 4, 4, 5
//       3, 4, 4, 5
//          4, 4, 5
//             4, 5
//                5




// 193 ==>	Get the Months Between Two Dates
// 	Create a function that, given 2 dates, returns the names of the months that are present between them (inclusive).
// 		Input
// 			var january = new Date(2017, 0, 1);
// 			var march = new Date(2017, 2, 1);
// 			monthsInterval(january, march)
// 		output
// 			['January', 'February', 'March']
// 		Input
// 			var december = new Date(2017, 11, 1);
// 			var january = new Date(2018, 0, 1);
// 			monthsInterval(december, january)
// 		output
// 			['January', 'December']
// 		Input
// 			var january2017 = new Date(2017, 0, 1);
// 			var january2018 = new Date(2018, 0, 1);
// 			monthsInterval(january2017, january2018)
// 		output
// 		['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// 			(Notice that January is not duplicated!)
// 	The returned array should include the months of dateStart and dateEnd (inclusive)
// 	The returned array must not include duplicate values
// 	The month names returned by the function should be sorted (not alphabetically, but ordered by which comes first (January = 1st month, February = 2nd month, … , December = 12th month))
// 	The function should produce the same output even if dateStart is greater than dateEnd

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function monthsInterval(date1, date2) {
    if (date1 > date2) {
        [date1, date2] = [date2, date1];
    }

    let y1 = date1.getFullYear();
    let y2 = date2.getFullYear();

    let m1 = date1.getMonth();
    let m2 = date2.getMonth();

    if (y1 == y2) {
        return months.slice(m1, m2 + 1);
    }

    let month = (y2 - y1) * 12;

    month -= m1;
    month += m2;

    console.log(m1, m2);
    if (month > 11) {
        return months;
    }
    else {
        return [...months.slice(m1), ...months.slice(0, m2 + 1)];
    }

}

var january = new Date(2017, 0, 1);
var march = new Date(2017, 2, 1);
console.log(monthsInterval(january, march));
//['January', 'February', 'March']

var december = new Date(2017, 11, 1);
var january = new Date(2018, 0, 1);
console.log(monthsInterval(december, january));
//['January', 'December']

var december = new Date(2017, 2, 1);
var january = new Date(2018, 10, 1);
console.log(monthsInterval(december, january));
//['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

var december = new Date(2017, 8, 1);
var january = new Date(2018, 2, 1);
console.log(monthsInterval(december, january));
//['September', 'October', 'November', 'December', 'January', 'February', 'March']

var january2017 = new Date(2017, 0, 1);
var january2018 = new Date(2018, 0, 1);
console.log(monthsInterval(january2017, january2018));
//['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

var january = new Date(2017, 0, 1);
var march = new Date(2017, 2, 1);
console.log(monthsInterval(march, january));
//['January', 'February', 'March']

var january = new Date(2017, 0, 1);
var march = new Date(2015, 2, 1);
console.log(monthsInterval(january, march));
