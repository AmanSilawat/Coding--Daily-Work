function generation(x, y) {
    const generation = {
        '-3': {
            m: "great grandfather",
            f: 'great grandmother'
        },
        '-2': {
            m: "grandfather",
            f: 'grandmother'
        },
        '-1': {
            m: "father",
            f: 'mother'
        },
        '0': {
            m: 'me!',
            f: "me!"
        },
        '1': {
            m: 'son',
            f: "daughter"
        },
        '2': {
            m: 'grandson',
            f: "granddaughter"
        },
        '3': {
            m: 'great grandson',
            f: "great granddaughter"
        }
    }
    return generation[x][y]
}



console.log(generation(1, "f")); // "daughter"

console.log(generation(2, "f")); // "granddaughter"

console.log(generation(-3, "m")); // "great grandfather"

console.log(generation(1, "f")); // "daughter"

/*

Generation	Male	            Female
-3          great grandfather   great grandmother
-2          grandfather	        grandmother
-1          father	            mother
 0          me!	                me!
 1          son	                daughter
 2          grandson	        granddaughter
 3          great grandson      great granddaughter

*/