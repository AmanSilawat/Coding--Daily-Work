function multiply(...num1) {
    if (num1.length == 1) {
        return function b(num2) {
            return num1[0] * num2;
        }
    } else {
        return num1.reduce((acc, val) => acc * val);
    }
}

multiply(4, 5); // => 20
multiply(3, 3); // => 9

const double = multiply(2);
double(5); // => 10
double(11); // => 22