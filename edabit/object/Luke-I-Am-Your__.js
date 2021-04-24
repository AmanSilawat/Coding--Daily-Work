/*
Luke, I Am Your ...

Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

Person	      Relation
---------------------------
Darth Vader	  father
Leia          sister
Han	          brother in law
R2D2          droid

*/

function relationToLuke(name) {
    const persion = {
        "Darth Vader": "father",
        "Leia": "sister",
        "Han": "brother in law",
        "R2D2": "droid"
    }
    return "Luke, I am your " + persion[name] + '.'
}

console.log(relationToLuke("Darth Vader")); // "Luke, I am your father."
console.log(relationToLuke("Leia")); // "Luke, I am your sister."
console.log(relationToLuke("Han")); // "Luke, I am your brother in law."