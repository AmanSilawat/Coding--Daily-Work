// pattern 1
(() => {
    for (var i = 1; i <= 10; i++) {
        setTimeout(function log() {
            console.log(i);
        }, 1000);
    }
});
// 10 times 10


// pattern 2
(() => {
    for (let i = 1; i <= 10; i++) {
        setTimeout(function log() {
            console.log(i);
        }, 1000);
    }
})()
// 10 times 1 to 10