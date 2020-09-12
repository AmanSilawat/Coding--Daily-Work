// 51 ==> Check String for Spaces
//     Create a function that returns true if a string contains any spaces.
console.log("51 --->")
function hasSpaces(str){
    return (str.split(" ").length) > 1
    // str.include(" ")
    // str.indexOf(" ")
    // (/ /g).test(str)
}
console.log(hasSpaces("hello"))
console.log(hasSpaces("hello, world"))
console.log(hasSpaces(" "))
console.log(hasSpaces(""))
console.log(hasSpaces(",./!@#"))

// 52 ==> Find the Bug: Returning the Container
//     The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag. The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...
//     getContainer("Bread") ➞ "bag"
//     getContainer("Beer") ➞ "bottle"
//     getContainer("Candy") ➞ "plastic"
//     getContainer("Cheese") ➞ null
console.log("52 --->")
function getContainer(str){
    /*
	if(str.trim().toLowerCase() == "Bread".trim().toLowerCase()){
        return "Bag"
    }
    else if(str.trim().toLowerCase() == "milk".trim().toLowerCase()){
        return "Bottle"
    }
    else if(str.trim().toLowerCase() == "candy".trim().toLowerCase()){
        return "plastic"
    }
    else{
        return null
    } 
    let obj = {
        Bread:"Bag",
        Milk:"Bottle",
        Candy:"Plastic"
    }["Milk"]
	*/
	switch(str.trim().toLowerCase()){
      case 'Bread'.trim().toLowerCase() : return 'Bag'
      case 'Milk'.trim().toLowerCase() : return 'Bottle'
      case 'Candy'.trim().toLowerCase() : return 'Plastic'
        default : return null
    }

}
    // switch case
    // str.trim
    // toLowerCase()
console.log(getContainer("bread"))
console.log(getContainer(" Bread "))
console.log(getContainer("Bread"))
console.log(getContainer("milk"))
console.log(getContainer("Candy"))
console.log(getContainer("Cheese"))

// 53 ==> Return the Total Number of Parameters
//     Create a function that returns the total number of parameters passed in.
//     numberArgs("a", "b", "c") ➞ 3
//     numberArgs(10, 20, 30, 40, 50) ➞ 5
//     numberArgs(x, y) ➞ 2
//     numberArgs() ➞ 0
console.log("53 --->")
function numberArgs(...array){
    console.log(arguments.length)
    return array.length
}
console.log(numberArgs("a", "b", "c"))
console.log(numberArgs(10, 20, 30, 40, 50))
console.log(numberArgs("x","y"))
console.log(numberArgs())

// 54 ==>  Extract City Facts
//     Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
//         name
//         population
//         continent
//         The string should have the following format: 
//     "X has a population of Y and is situated in Z" 
//     (where X is the city name, Y is the population and Z is the continent the city is situated in).
//         cityFacts({
//             name: "Paris",
//             population: "2,140,526",
//             continent: "Europe"
//         }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"
//         cityFacts({
//             name: "Tokyo",
//             population: "13,929,286",
//             continent: "Asia"
//         }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
//         cityFacts({
//             name: "Tokyo",
//             population: "13,929,286"
//         }) ➞ "Tokyo has a population of 13,929,286"
console.log("54 --->")
function cityFacts(cityDetail){
    return `${cityDetail.name} Has Population Of ${cityDetail.population} ${(cityDetail.continent) ?  ' and is situated in '+(cityDetail.continent) : ''}`
}
console.log(cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
}))
console.log(cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
}))
console.log(cityFacts({
    name: "Tokyo",
    population: "13,929,286"
}))

// 55 ==> Volume of a Box
//     Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
//         volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
//         volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
//         volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
//     Volume is length * width * height.
console.log("55 --->")
function volumeOfBox(data){
    return (data.width * data.length * data.height)
}
console.log(volumeOfBox({ width: 2, length: 5, height: 1 }))
console.log(volumeOfBox({ width: 4, length: 2, height: 2 }))
console.log(volumeOfBox({ width: 2, length: 3, height: 5 }))

// 56 ==> Stuttering Function
//     Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.
//         stutter("incredible") ➞ "in... in... incredible?"
//         stutter("enthusiastic") ➞ "en... en... enthusiastic?"
//         stutter("outstanding") ➞ "ou... ou... outstanding?"
console.log("56 --->")
function stutter(stutter){
    let ex = stutter.substring(0, 2)
    return `${ex}... ${ex}... ${stutter} ?`
}
console.log(stutter("incredible"))
console.log(stutter("enthusiastic"))
console.log(stutter("outstanding"))

// 57 ==> Is the Word Singular or Plural?
//     Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
//         isPlural("changes") ➞ true
//         isPlural("change") ➞ false
//         isPlural("dudes") ➞ true
//         isPlural("magic") ➞ false
//         This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.
console.log("57 --->")
function isPlural(str){
    return str[str.length - 1] == "s"
    //str.endsWith()
    //includes()
    //indexOf()
}
console.log(isPlural("changes"))
console.log(isPlural("change"))
console.log(isPlural("dudes"))
console.log(isPlural("magic"))

// 58 ==> Four Passengers and a Driver
//     A typical car can hold 4 passengers and 1 driver, overall allowing 5 people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.
//         carsNeeded(5) ➞ 1
//         carsNeeded(11) ➞ 3
//         carsNeeded(0) ➞ 0
console.log("58 --->")
function carsNeeded(passenger){
    return Math.ceil(passenger/5);
}
console.log(carsNeeded(5))
console.log(carsNeeded(11))
console.log(carsNeeded(0))

// 59 ==> ES6: Destructuring Arrays IV
//     There is an easy way to assign to array values to the nth index by using the Rest element.
//         var [head, tail] = [1, 2, 3, 4]
//         console.log(head) // outputs  1
//         console.log(tail) // outputs 2
//     But how could I make tail = [2, 3, 4] instead of tail = 2?
console.log("59 --->")
var [head, ...tail] = [1, 2, 3, 4]
console.log(head)
console.log(tail)

// 60 ==> ES6: Destructuring Arrays III
//     You can assign variables from arrays with destructuring like this:
//         const arr = ["eyes", "nose", "lips", "ears"]
//         let [eyes, nose, lips, ears] = arr
//     But you can also skip over items in the array being destructured. (takeout only lips)
console.log("60 --->")
const arr = ["eyes", "nose", "lips", "ears"]
let [, , lips, ] = arr
console.log(lips)