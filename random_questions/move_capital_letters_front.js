// ! Move Capital Letters to the Front

function capToFront(s) {
    return s.match(/([A-Z]+)/g,).join('') + s.match(/([a-z]+)/g,).join('');
    return /[A-Z]+/g.exec(s)
}

console.log(capToFront("hApPy")); // "APhpy"
console.log(capToFront("moveMENT")); // "MENTmove"
console.log(capToFront("shOrtCAKE")); // "OCAKEshrt"