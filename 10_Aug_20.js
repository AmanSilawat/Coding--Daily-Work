// 61 ==> ES6: Destructuring Objects III
const obj =  { two : 2 }
var { one=1, two } = obj
console.log(one) // outputs undefined
// Sometimes an object will be missing properties we are expecting. We can avoid undefined errors by using default values. Use ES6 object destructuring to add a default value of 1 to the one variable. Ignore the .toString() function (used for validation).

// 62.
function moodToday(str) {
	return `I am feeling ${str || "neutral"}`;
}

console.log( moodToday("happy") ); // "Today, I am feeling happy"
console.log( moodToday("sad") ); // "Today, I am feeling sad"
console.log( moodToday() ); // "Today, I am feeling neutral"

// 63.
function hasSameBread(arr1, arr2) {
	return arr1[0] == arr1[arr1.length-1] && arr2[0] == arr2[arr2.length-1] && arr1[0] == arr2[0];
	//make sort way ?????
}

console.log(hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
) ); // true
console.log(hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
) ); // false
console.log(hasSameBread(
    ["toast", "cheese", "toast"],
    ["brown bread", "cheese", "toast"]
) ); // false


// 64
function nSidedShape(number) {
	var arr = ["circle","semi-circle","triangle","square","pentagon","hexagon","heptagon","octagon","nonagon","decagon"];
	return arr[number-1];
}

console.log( nSidedShape(3) ); // "triangle"
console.log( nSidedShape(1) ); // "circle"
console.log( nSidedShape(9) ); // "nonagon"


// 65.
function getMultipliedArr(arr) {
	// for (var i = 0; i < arr.length; i++) {
	// 	arr[i] = 2 * arr[i];
	// }
	// return arr;

	return arr.map(ele=> ele * 2)
}

console.log(getMultipliedArr([2, 5, 3]) );// [4, 10, 6]
console.log(getMultipliedArr([1, 86, -5]) );// [2, 172, -10]
console.log(getMultipliedArr([5, 382, 0]) );// [10, 764, 0]


// 66.
function longBurp(number) {
	let str = '';
	for (var i = 0; i < number; i++) {
		str += "r";
	}
	return `Bu${str}p`;

	// return `Bu${"r".repeat(number)}p`;

}
console.log( longBurp(3) ); // "Burrrp"
console.log( longBurp(5) ); // "Burrrrrp"
console.log( longBurp(9) ); // "Burrrrrrrrrp"


// 67.

let { name, email, ...rest} = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}
console.log(name)  // "John"
console.log(email)  // "john@example.com"
console.log(rest)  // "john@example.com"


// 68.
function ctoa(char) {
	return char.charCodeAt()
}
console.log( ctoa("A") );// 65
console.log( ctoa("m") );// 109
console.log( ctoa("[") );// 91
console.log( ctoa("\\") );// 92



// 69.
function totalCups(cofeeCups) {
	let rest = Math.floor(cofeeCups / 6);
	return rest + cofeeCups;
}
console.log( totalCups(6) ); // 7
console.log( totalCups(12) ); // 14
console.log( totalCups(213) ); // 248



// 70.
function wordLengths(arr) {
	// let dummy = [];
	// for (var i = 0; i < arr.length; i++) {
	// 	dummy.push(arr[i].length);
	// }
	// return dummy;

	return arr.map( v=> v.length);
}
console.log(wordLengths(["hello", "world"]) ); // [5, 5]
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ); // [9, 12, 9]
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ); // [3, 5, 9, 4, 2, 3, 8]



// 71.
function getFilename(path) {
	let dummy = path.split('/');
	return dummy[dummy.length-1];

}
console.log( getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ); // "edabit.txt"
console.log( getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ); // "Beethoven_5.mp3"
console.log( getFilename("ffprobe.exe") ); // "ffprobe.exe"









// complete all string methods
// 71 no. question use lastIndex() substring


/*

*** BASIC CODE ON GIT ***

git add .   // all files
git add file path   // single file
git add foldername/   //complete folder

git commit -m "message"     // add commit
git push origin master      //code push on github
cd ..        //back one directry



*** HOW TO CREATE GIT FROM BIGINNER ***

1. goto github
2. create repositories (project name or course name)
3. rm -rf Calculator\ Project/
4. git init
5. git add .
6. git status
7. git commit -m "Created Calculator"
8. git remote add origin https://github.com/AmanSilawat/Project-Calculater.git
9. git push origin master
Username for 'https://github.com': aman.khan.silawat.aks@gmail.com and password
10.git status



*** HOW TO CREATE GIT FROM BIGINNER (METHOD 2) ***

create a repo 
git clone repo-path  
goto the project in terminal
copy files into repo
git add .
git commit -m 'add course'
git push origin master

git config user.email "your_email@abc.com"

*/