// 105 ==>	Reverse the Order of a String
// 	Create a function that takes a string as its argument and returns the string in reversed order.
function reverse(str) {
	return Array.from(str).reverse().join('');
	
	// let dummy = '';
	// for (var i = str.length - 1; i >= 0; i--) {
	// 	dummy += str[i];
	// }
	// return dummy;

}
// console.log( reverse("Hello World") ); // "dlroW olleH"
// console.log( reverse("The quick brown fox.") ); // ".xof nworb kciuq ehT"
// console.log( reverse("Edabit is really helpful!") ); // "!lufpleh yllaer si tibadE"



// 106 ==>	Does the Object Contain a Given Key?
// 	Write a function that returns true if a hash contains the specified key, and false otherwise.
function hasKey(obj, keyToFind) {
	// for( key in obj ) {
	// 	if (key == keyToFind) {
	// 		return true;
	// 	}
	// }
	// return false;

	// return keyToFind in obj;   *IMPORTANT*

	// return !!obj[keyToFind];

	// return obj.hasOwnProperty(keyToFind);

	// return Object.keys(obj).includes(keyToFind)

	// return obj[keyToFind] ? true : false;

	return obj?.[keyToFind] ? true : false;  //optional chaning

}
// console.log( hasKey({ a: 44, b: 45, c: 46 }, "d") ); // false
// console.log( hasKey({ craves: true, midnight: true, snack: true }, "morning") ); // false
// console.log( hasKey({ pot: 1, tot: 2, not: 3, xyz: null }, "not") ); // true




// 107 ==>	Strange Pair
// 	A pair of strings form a strange pair if both of the following are true:
// 		The 1st string's first letter = 2nd string's last letter.
// 		The 1st string's last letter = 2nd string's first letter.
// 	Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.

function isStrangePair(str1, str2) {
	// return str1.substr(0, 1) == str2.substr(-1) && str1.substr(-1) == str2.substr(0, 1);

	// return str1[0] == str2[str2.length-1] && str1[str1.length-1] == str2[0];

	// return str2.endsWith(str1.charAt(0)) && str1.endsWith(str2.charAt(0))
}
// console.log( isStrangePair("ratio", "orator") ); // true
// // "ratio" ends with "o" and "orator" starts with "o".
// // "ratio" starts with "r" and "orator" ends with "r".
// console.log( isStrangePair("sparkling", "groups") ); // true
// console.log( isStrangePair("bush", "hubris") ); // false
// console.log( isStrangePair("", "") ); // true




// 108 ==>	Typing Game	
// 	You're in the midst of creating a typing game.
// 	Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).
		// Inputs:
		// 	User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
		// 	Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]
		// Output: [1, 1, -1, -1, 1]



let userType = ["cat", "blue", "skt", "umbrells", "paddy"]
let correctArray = ["cat", "blue", "sky", "umbrella", "paddy"]

// console.log( userType.map((ele, i)=> ele == correctArray[i] ? 1 : -1) );





// 109 ==>	Repeat the Same Item Multiple Times
// 	Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.
function repeat_2(item, times) {
	// let newArr = [];
	// for (var i = 1; i <= times; i++) {
	// 	newArr.push(item);
	// }
	// return newArr;

	// let x = String(item+'___').repeat(times).split("___")
	// x.pop()
	// return x;

	return String(item+'___').repeat(times).split("___").slice(0, -1)   //  * slice use on array *

	// let y = String(item+'___').repeat(times).split("___")
	// y.splice(-1);
	// return y;
}
// console.log( repeat_2("edabit", 3) ); // ["edabit", "edabit", "edabit"]
// console.log( repeat_2(13, 5) ); // [13, 13, 13, 13, 13]
// console.log( repeat_2("7", 2) ); // ["7", "7"]
// console.log( repeat_2(0, 0) ); // []



function removeFirstLast(str) {
	return str.length < 3 ? str : str.slice(1, -1);
}

// 110 ==>	Remove the First and Last Characters
// 	Create a function that removes the first and last characters from a string.
// console.log( removeFirstLast("hello") ); // "ell"
// console.log( removeFirstLast("maybe") ); // "ayb"
// console.log( removeFirstLast("benefit") ); // "enefi"
// console.log( removeFirstLast("a") ); // "a"
	// If the string is 2 or fewer characters long, return the string itself (See Example #4).




// 111 ==>	Capture the Rook
// 	Write a function that returns true if two rooks can attack each other, and false otherwise.
function canCapture([pos1, pos2]) {
	return pos1[0] == pos2[0] || pos1[1] == pos2[1]
}
// console.log(canCapture(["A8", "E8"]) ); // true    //rook => hathi
// console.log(canCapture(["A1", "B2"]) ); // false
// console.log(canCapture(["H4", "H3"]) ); // true
// console.log(canCapture(["F5", "C8"]) ); // false
	// Assume no blocking pieces.
	// Two rooks can attack each other if they share the same row (letter) or column (number).






// 112 ==>	Palindrome?
// 	A palindrome is a word that is identical forward and backwards.
// 		mom
// 		racecar
// 		kayak
// 	Given a word, create a function that checks whether it is a palindrome.
function checkPalindrome(str) {
	// return str.split('').reverse().join('') == str;

	// return Array.from(str).reverse().join('') == str;

	return [...str].reverse().join('') == str;
}
// console.log( checkPalindrome("mom") ); // true
// console.log( checkPalindrome("scary") ); // false
// console.log( checkPalindrome("reviver") ); // true
// console.log( checkPalindrome("stressed") ); // false




// 113 ==>	Little Dictionary --------------------------- inplement {lakhs input in array}
function dictionary(str, dictionary) {
	str.toLowerCase()
	return dictionary.filter((ele)=> ele.toLowerCase().startsWith(str));

	// return dictionary.filter((ele)=> ele.toLowerCase().startsWith(str));

	// return dictionary.filter((ele)=> ele.indexOf(str) == 0 ? ele : "");
}
// Create a function that takes in an initial word and filters out an array which contains words that start with the same letters as the initial word.
// console.log( dictionary("bu", ["Button", "breakfast", "border"]) ); // ["button"]
// console.log( dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ); // ["triplet", "tries", trip"]

// console.log( dictionary("beau", ["pastry", "delicious", "name", "boring"]) ); // []
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.

console.log( dictionary("civic", ["DBS","Topaz","Thunderbird","Montero Sport","300CE","RL","Rally Wagon G2500","Tribute","TL","Express 3500","RAV4","F350","Cayenne","300M","C70","Sable","Azera","F350","Flex","SLK-Class","V50","Eurovan","Uplander","L-Series","Explorer Sport","Sierra 1500","C-Class","Escort","Sonata","Eclipse","M","Yukon","Vantage","Camry","Mountaineer","LaCrosse","Fleetwood","C-Class","Villager","Cabriolet","Savana 3500","SLS-Class","SC","Cougar","S4","GTI","Grand Am","Astro","Highlander","S2000","Camry","Odyssey","LeMans","Forester","Ram Van B350","Silverado 2500","Cavalier","CR-V","Transit Connect","Express 3500","CT","Starion","Dakota Club","Charger","E-Class","E250","Sierra 3500","F250","Camaro","Canyon","XC70","ES","Voyager","X5","Catera","Endeavor","Grand Am","Camaro","Blazer","M-Class","CTS-V","Stanza","Sebring","C8","Caravan","Accent","X3","9-5","Catera","B-Series Plus","Golf","Regal","Tucson","Touareg","Odyssey","Civic","A6","7 Series","Imperial","Challenger","Golf","Sportvan G20","Econoline E150","Corrado","Navigator","Elise","Ram 3500","Rogue","Nuova 500","Reno","300ZX","Tiburon","B-Series","Escalade ESV","650","Grand Am","Passat","SX4","Type 2","Sierra 2500","Metro","Century","Grand Am","Caravan","E-Class","Frontier","XC70","Town & Country","Ascender","Silverado 1500","Cavalier","XT","Paseo","Justy","Storm","Suburban 2500","7 Series","Charger","3500 Club Coupe","Suburban 2500","612 Scaglietti","Grand Marquis","Town & Country","XJ Series","Tercel","Impreza","Ranger","RAV4","Avalanche 2500","Miata MX-5","Forester","Solara","Ram Van 3500","Explorer","911","Monaco","xD","3500","Roadmaster","CL-Class","90","Landaulet","Colt Vista","Concorde","Villager","Tucson","Leone","Cayenne","Explorer","Esprit Turbo","Lumina","Aztek","Supra","4Runner","Camry","DBS","L-Series","E150","H1","A4","Grand Prix","Element","Biturbo","Dakota","Pathfinder","Tracker","Previa","Savana 3500","Ram 2500","Cougar","Ram Van B350","Chariot","Highlander","E150","Stratus","Range Rover Evoque","Ram 1500","Ram 1500","5 Series","Sierra 2500","Sable","Bravada","Yukon XL 1500","Eclipse","Roadster","Mazda5","Sequoia","XC90","Range Rover Sport","Corvette","S2000","Windstar","3500","Evora","626","Suburban 2500","Fusion","Mirage","i-Series","Vantage","Sierra 3500","RX-7","XLR","E-Class","62","Silverado 3500","Tredia","SL65 AMG","Range Rover","325","Grand Cherokee","Aerio","Soul","Galant","EXP","C-Class","9-3","Corvette","929","Grand Caravan","CL","tC","Camry","MX-5","Continental Flying Spur","Gallardo","LX","Rainier","Taurus","Fleetwood","Colorado","X6 M","S10","Avalanche 1500","Defender 90","Echo","Liberty","929","Minx Magnificent","Galant","Venture","Quattroporte","LX","FJ Cruiser","Sable","Mustang","LeMans","RL","Ram Wagon B150","300TE","Mystique","Yukon","Tundra","Liberty","Grand Am","Sequoia","Legacy","Tahoe","Azure","Murciélago","Golf","7 Series","Town Car","Continental","Envoy XL","Probe","325","Mustang","Passat","LaCrosse","Diablo","CLS-Class","i-370","XJ","ES","Carens","57","Silverado","Corolla","Seville","Villager","C-Class","Prelude","Reliant","Navigator","Scirocco","Intrepid","S6","Corvette","B-Series","Thunderbird","Jetta III","Econoline E250","M Roadster","Accent","I","G-Class","SL-Class","Land Cruiser","5 Series","Riviera","Stylus","Marquis","Express 2500","Eldorado","PT Cruiser","MX-6","Silverado","Mark VIII","Corrado","Mystique","200","940","S40","S70","911","Sierra 3500","S-Series","Legacy","G-Series G30","LaCrosse","Pathfinder","Beretta","Supra","Coupe GT","Jetta","Avenger","Crown Victoria","Suburban 1500","Sierra 1500","Regal","G-Series G10","9000","F350","B-Series","Ram 3500 Club","Defender","57","X5 M","B-Series Plus","Silverado","Corvette","Montero Sport","Savana 3500","Odyssey","Outback","Jetta","Element","Cayenne","Fleetwood","Grand Am","Firebird","Escalade","9-7X","7 Series","9-5","VUE","Bonneville","E350","G-Class","RDX","2500","RX-8","Cutlass Supreme","RAV4","Tempo","Frontier","Grand Caravan","Spider","Tucson","Mustang","9-7X","Freelander","Swift","Q","Explorer Sport Trac","Touareg","M3","Firefly","Fairlane","MX-6","Camry Hybrid","Boxster","Oasis","Regal","A5","Pathfinder Armada","Sienna","Explorer","Optima","Sable","Savana 1500","Villager","G","Q5","ES","Range Rover","Veracruz","Patriot","Leone","Ghost","Cordia","Bravada","Tracker","Leone","Aurora","M-Class","Type 2","Navigator","Bronco II","Focus","Rodeo","Miata MX-5","B-Series","1 Series","Fortwo","M6","Impulse","Outback","Savana 2500","4000s Quattro","GTO","Freelander","Silhouette","Skyhawk","Cordia","Jetta","C-Class","Echo","Spyder","Camaro","R8","Colorado","Passat","S60","Grand Prix","Escalade EXT","Leaf","5 Series","V90","Caprice","Venture","Titan","VUE","Bronco","New Beetle","Frontier","Pilot","XC90","G-Series G30","Nubira","TrailBlazer","Town & Country","Silverado 2500","Z4 M Roadster","Grand Cherokee","Summit","New Yorker","Suburban 1500","MX-6","Sequoia","E-Series","Prizm","Ram Wagon B150","LHS","RDX","Riviera","Jimmy","Grand Marquis","Colt","Mazda5","Econoline E350","RX-7","Accord","Gallardo","Yukon","Dakota","Century","Firebird","Silverado 2500","Accord","S10 Blazer","CL-Class","Express 1500","Forenza","TSX","Ram 1500 Club","Gemini","Sportage","Bronco","Taurus","Insight","Windstar","Envoy","Grand Am","Quattroporte","Colorado","Golf","F350","Compass","QX","XC90","XLR-V","9-5","Sienna","S4","Montero","Quattro","GTI","Esperante","B-Series Plus","Bonneville","550","Accord","SC","B2500","A4","5000S","Montero","xD","XR4Ti","Yukon XL 2500","G-Series 3500","Dakota","6 Series","2500","4Runner","Sentra","Fillmore","Express","Jimmy","Acclaim","Cougar","9-7X","Prizm","Precis","XLR-V","ES","Corvette","Firebird","Explorer","Civic","Bravada","Thunderbird","Tracker","Viper","Grand Voyager","H1","Pathfinder","Rocky","Swift","GX","Defender 90","Malibu","57S","Tracker","QX56","Caravan","RAV4","XC70","RL","300","Bravada","Taurus","Mustang","F-Series Super Duty","HHR","Legend","Escort","Previa","Cirrus","MPV","Topaz","Express 1500","Ram 2500 Club","S6","Mazda6","Ram 1500 Club","3 Series","E250","Cayenne","F150","Escalade","STS","Century","Sierra","TT","M3","B-Series","Prizm","Mountaineer","Pilot","Intrepid","Avenger","Expo","RSX","Coupe Quattro","Jetta","Tribeca","S-Class","Express","Civic Si","GS","Corvette","Galant","Mazda6 5-Door","Yukon","F250","Z3","Jetta","Murano","Prizm","240SX","Cavalier","Mustang","4Runner","Econoline E350","GTO","Land Cruiser","Sportvan G10","IS","Sierra","Commander","Sierra 1500","4Runner","A6","H2 SUV","Reatta","NSX","Regal","GranTurismo","Golf","Frontier","Accord","Vantage","911","Prelude","Eclipse","Hombre Space","Escalade EXT","928","Crown Victoria","Durango","Gallardo","Mirage","CLK-Class","Grand Prix","Gemini","Prizm","MR2","Econoline E250","SLR McLaren","MR2","Grand Cherokee","1500 Club Coupe","Veyron","Rally Wagon 1500","Defender","E250","Camry","Sportvan G20","E-Class","Coupe Quattro","E-Series","D150","Camry","XC70","SC","Quest","Excursion","QX","Cayman","Defender","Fleetwood","Tercel","Avalanche","6 Series","CR-X","Silverado 2500","Fox","MX-5","Yukon","MR2","CR-Z","F-Series","C70","Vanagon","Boxster","Grand Marquis","Silhouette","Sportage","98","Protege","Santa Fe","Sentra","MKS","ES","XLR","A4","Monte Carlo","Mustang","XT","612 Scaglietti","Bronco II","Santa Fe","Grand Marquis","riolet","Civic","TL","Sedona","Explorer","Sundance","H1","Grand Prix","Mirage","Grand Marquis","Elantra","CR-V","Compass","F250","Defender 110","Trooper","Tribeca","Murciélago","Stratus","E250","DeVille","Mark LT","E-Class","NSX","Five Hundred","Safari","Explorer Sport Trac","Hombre Space","Cayman","Rabbit","Mustang","Sephia","SLK-Class","del Sol","tC","V12 Vantage","Corolla","TT","Taurus","Brat","Yukon XL 1500","SL-Class","Navigator L","LTD Crown Victoria","Suburban 2500","Town Car","M-Class","Civic","Escape","Challenger","GTO","Century","164","GTI","Celica","CLK-Class","C70","Escape","929","Ram 2500","F350","Savana 3500","GT500","500SL","Forester","E-Series","Tiburon","Ram","960","Lancer","Stealth","Continental Flying Spur","RAV4","RX","F450","LeMans","Continental Mark VII","Sportvan G10","M-Class","Ram 2500","J","Forester","Ascender","Yaris","E-Class","Type-1h","Lumina","Envoy","Mighty Max","SLK-Class","430","Neon","Grand Am","Corvette","Pilot","Dakota","Ram 3500","Econoline E250","Xterra","V8 Vantage","SLR McLaren","Mustang","Sequoia","E-Series","E-Series","MDX","Prelude","5000CS Quattro","Eclipse","Silverado","A3","Sportage","Colt Vista","SX4","Eos","9-3","Aveo","EXP","MX-6","RX-7","57","Savana 3500","Colorado","Ram Van 2500","S-Type","Sonata","X6","C70","Jimmy","C-Class","LeSabre","Sportvan G30","Mazdaspeed 3","Town Car","Genesis","Jetta","Blazer","Ciera","M","Sienna","XK","Cabriolet","Tundra","F-Series","RDX","Boxster","Quattroporte","LS","4Runner","CX-9","Corvette","Expo LRV","Escalade","Express 2500","MX-6","R-Class","Golf","Ion","Coachbuilder","Panamera","Santa Fe","SL-Class","Aurora","V50","Caravan","G","Regal","Patriot","Golf","Celica","Continental GT","S-Series","4Runner","Firefly","Tribute","Armada","Maxima","Protege","Daewoo Kalos","CR-V","Thunderbird","Ranger","LeSabre","MPV","Blazer","Bronco","Grand Marquis","QX","Ram 1500","Voyager","Paseo","5 Series","Eos","Titan","300ZX","Riviera","GTI","Sierra","Highlander","Aspen","Chariot","Eurovan","Probe","G-Series G30","Silverado 2500","HHR","960","Highlander","Pathfinder","DeVille","RX-8","SL-Class","Silverado 3500","S4","Optima","Grand Prix","VUE","Mirage","Pajero","TL","LS","H1","Bronco II","Silverado 2500","LeSabre","Civic","Vandura 1500","Montego","Pathfinder","Quattro","Civic GX","Precis","Yukon XL 2500","Rio","S4","Suburban 2500","Ram 1500","E-Series","Compass","Celica","Seville","Econoline E150","62","XK","Prowler","Impreza","I","Explorer Sport Trac","Elantra","Breeze","Pathfinder","100","Diablo","Grand Am","R32","M3","MX-6","G","V8 Vantage","9000","Escort ZX2","E-Series","Escalade EXT","Lumina","Fusion","Dakota","Cayenne","Endeavor","Mazdaspeed6","GX","CR-V","SJ 410","Colorado","D150 Club"]) );




// 114 ==>	Calculate the Profit
// 	You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar.
function profit({costPrice, sellPrice, inventory}) {
	return Math.round( (sellPrice - costPrice) * inventory );
}
// console.log( profit({
// 	costPrice: 32.67,
// 	sellPrice: 45.00,
// 	inventory: 1200
// }) ); // 14796

// console.log( profit({
// 	costPrice: 225.89,
// 	sellPrice: 550.00,
// 	inventory: 100
// }) ); // 32411

// console.log( profit({
// 	costPrice: 2.77,
// 	sellPrice: 7.95,
// 	inventory: 8500
// }) ); // 44030
	// Assume all inventory has been sold.
	// Profit = Total Sales - Total Cost






// 115 ==>	Reverse and Capitalize
// 	Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.
function reverseCapitalize(str) {
	// return Array.from(str).reverse().join('').toUpperCase();

	// return [...str].reverse().join('').toUpperCase();

	return str.split('').reverse().join('').toUpperCase();
}

// console.log(reverseCapitalize("abc") ); // "CBA"
// console.log(reverseCapitalize("hellothere") ); // "EREHTOLLEH"
// console.log(reverseCapitalize("input") ); // "TUPNI"






// 116 ==>	Exists a Number Higher?
// 	Write a function that returns true if there exists at least one number that is larger than or equal to n.
function existsHigher(arr, num) {
	// return arr.some(ele=> ele >= num);

	// for (var i = 0; i < arr.length; i++) {
	// 	if (arr[i] >= num) {
	// 		return true;
	// 	}
	// }
	// return false;

	return Math.max(...arr) >= num;
}
// console.log( existsHigher([5, 3, 15, 22, 4], 10) ); // true
// console.log( existsHigher([1, 2, 3, 4, 5], 8) ); // false
// console.log( existsHigher([4, 3, 3, 3, 2, 2, 2], 4) ); // true
// console.log( existsHigher([], 5) ); // false