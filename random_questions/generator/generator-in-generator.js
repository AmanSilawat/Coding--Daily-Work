function* firstGenerator() {
    yield 2;
    yield 3;
}


function* secondGenerator() {
    yield 1;
    yield* firstGenerator();
    yield 4;
}

// !uncomment and run
// const gen = secondGenerator();
// console.log(gen.next()) // 1
// console.log(gen.next()) // 2
// console.log(gen.next()) // 3
// console.log(gen.next()) // 4



for (let value of secondGenerator()) {
    console.log(value)
}

// Output
// 1
// 2
// 3
// 4