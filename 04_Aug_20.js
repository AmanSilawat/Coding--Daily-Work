// 1. Plus simble to convert stiong--------------------------
function addtion2(num1, num2) {
	//we shoud never reassign argument
	return +num1 + +num2;
	//return Number(num1) + Number(num2);
}
//console.log( addtion("5", "5") );


// 2. the input is minute and output is second----------------
function convertSecToMin(minute) {


	if (typeof Number(minute) == "number") {
		return minute * 60;
	}
	else {
		return NaN;
	}
}

convertSecToMin(2);
convertSecToMin(-5);
convertSecToMin(3, 5);
convertSecToMin("6");
convertSecToMin([]); //empty array convert into number 0
convertSecToMin([5, 8, 2, 1]);
convertSecToMin('2');


// 1 ==> addtion ---------------
function addition(num1, num2) {
	return Number(num1) + Number(num2);
}

// console.log( addition(3, 2) );  // 5
// console.log( addition(-3, -6) );  // -9
// console.log( addition(7, 3) );  // 10
// console.log( addition('7', '3') );  // 10
// console.log( addition('7', 3) );  // 10

function increment(num) {
	if (typeof Number(num) == "number") {
		return Number(num) + 1
	}
	else {
		return NaN;
	}
}
// console.log( increment(0) ); // 1
// console.log( increment('9') ); // 10
// console.log( increment('-3') ); // -2



// 4. ==> -------------------
function giveMeSomething(someData) {
	return `something ${someData}`;
}

// console.log( giveMeSomething("is better than nothing") );  //"something is better than nothing"
// console.log( giveMeSomething("Bob Jane") );  //"something Bob Jane"
// console.log( giveMeSomething("something") );  //"something something"


// 5. `Area of a Triangle` ==> -------------------
function triArea(height, base) {
	// base = aadar, 
	return (base * height) / 2 //redablity 
}

// console.log( triArea(3, 2) ); // 3
// console.log( triArea(7, 4) ); // 14
// console.log( triArea(10, 10) ); // 50
// console.log( triArea(20, 12) ); // 120



// 6 ==> `Convert Hours into Seconds`  ----------------
function howManySeconds(hours) {
	if (typeof Number(hours) == 'number') {
		return hours * 60 * 60;
	}
}
// console.log( howManySeconds(2) ); // 7200
// console.log( howManySeconds(10) ); // 36000
// console.log( howManySeconds(24) ); // 86400



// 7 ==>  -----------------
function getFirstValue(array) {
	if ( Array.isArray(array) && array.length != 0 ) {
		return array[0];
	}
	else {
		return NaN;
	}
}
// console.log( getFirstValue(5)); // NaN
// console.log( getFirstValue([])); // NaN
// console.log( getFirstValue([1, 2, 3])); // 1
// console.log( getFirstValue([80, 5, 100])); // 80
// console.log( getFirstValue([-500, 0, 50])); // -500


// 8 ==> `Maximum Edge of a Triangle` -----------
function nextEdge(edge1, edge2) {
	return edge1 + edge2 - 1;
}
// console.log( nextEdge(8, 10) );// 17
// console.log( nextEdge(5, 7) );// 11
// console.log( nextEdge(9, 2) );// 10



// 9 ==> ----------------------------
//     `Find the Perimeter of a Rectangle`
//     `Create a function that takes length and width and finds the perimeter of a rectangle.`
function findPerimeter(width, height) {
	return 2 * (Number(width) + Number(height));
}
// console.log( findPerimeter(6, 7)  ); // 26
// console.log( findPerimeter(20, 10) );  // 60
// console.log( findPerimeter(2, 9)  ); // 22


// 10 ==> ----------------------------
//     `Return the Remainder from Two Numbers`
//     `There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.`
function remainder(num1, num2) {
	return Number(num1) % Number(num2);
}
// console.log( remainder(1, 3) ); // 1
// console.log( remainder(3, 4) ); // 3
// console.log( remainder(-9, 45) ); // -9
// console.log( remainder(5, 5) ); // 0