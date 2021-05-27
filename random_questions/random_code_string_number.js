function random(length) {
    let code = '';
    console.log(Math.floor(length / 2));
    for (let i = 0; i < length; i++) {
        if (i == Math.floor(length / 2)) {
            code += '-'
        }
        if (Math.random() < 0.5) {
            code += String.fromCharCode(Math.floor(Math.random() * 10) + 48)
        } else {
            code += String.fromCharCode(Math.floor(Math.random() * 26) + 65)
        }
    }
    return code;
}

console.log(random(10)); // 40W1S-O1UDV