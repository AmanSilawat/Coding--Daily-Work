// 31 ==> Movie Theatre Admittance  -----------------------------
//     Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
//         The person is at least 15 years old.
//         They have parental supervision.
//     The function accepts two parameters, age and isSupervised. Return a boolean.
function acceptIntoMovie(age, isSupervised) {
	return 15 <= age || isSupervised
	// return 15 >= age || isSupervised
}
// console.log( acceptIntoMovie(14, true) ); // true
// console.log( acceptIntoMovie(14, false) ); // false
// console.log( acceptIntoMovie(16, false) ); // true
// age is a decimal.
// isSupervised is a boolean.



// 32 ==> Evaluate an Equation  -------------------------
//     Create a function that evaluates an equation.
function eq(expression) {
	return eval(expression);
}
// console.log( eq("1+2") );// 3
// console.log( eq("6/(9-7)") );// 3
// console.log( eq("3+2-4") );// 1



// 33 ==> Concatenate First and Last Name into One String
//     Given two strings, firstName and lastName, return a single string in the format "last, first".
function concatName(firstName, lastName) {
	return lastName + ", " + firstName;
	// return `${lastName}, ${firstName}`; // tamplate litral
}
// console.log(concatName("First", "Last")); // "Last, First"
// console.log(concatName("John", "Doe")); // "Doe, John"
// console.log(concatName("Mary", "Jane")); // "Jane, Mary"



// 34 ==> On/Off Switches
//     Create a function that returns how many possible outcomes can come from a certain number of switches (on / off).
function posCom(num) {
	return Math.pow(2, num);
	//return 2 ** num;
}
// console.log( posCom(1) ); // 2
// console.log( posCom(3) ); // 8
// console.log( posCom(10) ); // 1024



// 35 ==> Triangle and Parallelogram Area Finder
//     Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.
function areaShape(base, height, shape) {
	if (shape == "triangle") {
		return 0.5 * base * height;
	}
	else if (shape == "parallelogram") {
		return base * height;
	}
	else {
		return NaN;
	}

	// return ( (shapre == "triangle") ? (0.5 * base * height) : (base * height) )
	//return (shape == 'triangle' ? 0.5 : 1) * base * height
}
// console.log( areaShape(2, 3, "triangle") );// 3
// console.log( areaShape(8, 6, "parallelogram") );// 48
// console.log( areaShape(2.9, 1.3, "parallelogram") );// 3.77
    // Area of a triangle is 0.5 * b * h
    // Area of a parallelogram is b * h
    // Assume triangle and parallelogram are the only inputs for shape.



// 36 ==> Reverse an Array
//     Write a function to reverse an array.
function reverse(arr) {
	let reverseArr = [];
	for (var i = arr.length; i > 0; i--) {
		reverseArr.push( arr[i-1] );
	}
	return reverseArr;
}
// console.log( reverse([1, 2, 3, 4]) ); // [4, 3, 2, 1]
// console.log( reverse([9, 9, 2, 3, 4]) ); // [4, 3, 2, 9, 9]
// console.log( reverse([]) ); // []



// 37 ==> ES6: Destructuring Arrays I
//     You can assign variables from arrays like this:
const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]

let [a, b] = [1, 2, 3, 4, 5, 6]
// console.log(a) // outputs 1
// console.log(b) // outputs 2
    // With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax




// 38 ==> Using Ternary Operators
//     Write a function that uses the ternary operator to return "yeah" if the condition is true, and "nope" otherwise.
function yeah_nope(bool) {
	return bool ? "yeah" : "nope";
}
// console.log( yeah_nope(true) ); // "yeah"
// console.log( yeah_nope(false) ); // "nope"



// 39 ==> Convert an Array to a String
//     Create a function that takes an array of numbers or letters and returns a string.
function arrayToString(arr) {
	return String(arr).replace(/,/g, "");
	//return arr.join('');
}
// console.log( arrayToString([1, 2, 3, 4, 5, 6]) );// "123456"
// console.log( arrayToString(["a", "b", "c", "d", "e", "f"]) );// "abcdef"
// console.log( arrayToString([1, 2, 3, "a", "s", "dAAAA"]) );// "123asdAAAA"



// 40 ==> Return the Last Element in an Array
//     Create a function that accepts an array and returns the last item in the array.
function getLastItem(arr) {
	return arr[arr.length-1];

	// if (Array.isArray(arr) && arr.length > 0 ) {
	// 	return arr[arr.length-1];
	// }
	// return NaN;
}
// console.log( getLastItem([1, 2, 3]) );// 3
// console.log( getLastItem(["cat", "dog", "duck"]) );// "duck"
// console.log( getLastItem([true, false, true]) );// true