var output = (function (x) {
    delete x;
    return x;
})(0);
console.log(output); // 0

// ----------------

var x = { foo: 1 };
var output = (function () {
    delete x.foo;
    return x.foo;
})();

console.log(output); // undefined

// ----------------

var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
console.log(trees); // ["redwood", "bay", "cedar", 'undefined', "maple"]
console.log(trees.length); // 5