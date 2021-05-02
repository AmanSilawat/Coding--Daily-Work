/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/
var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};
function findPath_(obj, path_string) {
    if (path_string == '') {
        return obj;
    }

    const path = path_string.split('.');
    let firstPath = path.shift();

    if (typeof obj[firstPath] != 'undefined') {
        return findPath(obj[firstPath], path.join('.'))
    }
}

function findPath__(obj, path_string) {
    try {
        return eval('obj.'+path_string);
    } catch (e) {
        return undefined;
    }
}

function findPath___(obj, path_string) {
    let path = path_string.split('.');
    let new_obj = Object.assign({}, obj);

    while (typeof new_obj == 'object') {
        new_obj = new_obj[path.shift()];

        if (path.length == 0) {
            break;
        }
    }
    return path.length == 0 ? new_obj : undefined;
}

// 
function findPath(obj, path_string) {
    let new_obj = { ...obj };
    const new_path_string = path_string.split('.');
    for (let i = 0; i < new_path_string.length; i++) {
        if (new_obj[new_path_string[i]] != undefined) {
            new_obj = new_obj[new_path_string[i]];
        } else {
            return undefined;
        }
    }
    return new_obj;
}

console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined