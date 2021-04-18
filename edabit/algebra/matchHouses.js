function matchHouses(step) {
    return (step * 6) - (step > 1 ? step - 1 : 0)
    return step == 0 ? 0 : step * 5 + 1;
}


console.log(matchHouses(1)); // 6

console.log(matchHouses(4)); // 21

console.log(matchHouses(87)); // 436