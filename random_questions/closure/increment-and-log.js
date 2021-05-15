// !what is the output
function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log(); // Count is ?


// ----------------------


// ! Modify the code and output is `Count is 3`
function createIncrement1() {
    let count = 0;
    let message;
    function increment() {
        count++;
        message = `Count is ${count}`;
    }

    function log() {
        console.log(message);
    }
    return [increment, log];
}

const [increment1, log1] = createIncrement1();

increment1();
increment1();
increment1();
log1(); // Count is 3