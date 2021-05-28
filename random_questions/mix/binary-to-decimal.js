function binaryToDecimal(str) {
    let decimal = 0;
    for (let i = str.length - 1, power = 0; i >= 0; i--, power++) {
        decimal += (2 ** power) * str[i];
    }
    return decimal;
}

console.log(binaryToDecimal('1101')); // 13