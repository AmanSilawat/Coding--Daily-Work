// Before ES6 version

const classDetails = {
    strength: 90,
    benches: 50,
    blackBoard: 1
}

const classStrength = classDetails.strength;
const classBenches = classDetails.benches;
const classBlackBoard = classDetails.blackBoard;



// using object destructuring:

const classDetails = {
    strength: 90,
    benches: 50,
    blackBoard: 1
}

// If we want our new variable to have the same name as the property of an object we can remove the colon:
const { strength: classStrength, benches: classBenches, blackBoard: classBlackBoard } = classDetails;

console.log(classStrength); // Outputs 90
console.log(classBenches); // Outputs 50
console.log(classBlackBoard); // Outputs 1




// same property name destructuring

const classDetails = {
    strength: 90,
    benches: 50,
    blackBoard: 1
}

const { strength, benches, blackBoard } = classDetails;

console.log(strength); // Outputs 90
console.log(benches); // Outputs 50
console.log(blackBoard); // Outputs 1