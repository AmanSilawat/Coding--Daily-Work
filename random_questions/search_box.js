function search_box(list, str) {
    const res = [];
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (list[i].toLowerCase().indexOf(str) == 0) {
            res.push(item);
        }
    }
    return res
}

const res = search_box(['hello', 'hi', 'home', 'ball', 'boy'], 'h');
console.log(res)