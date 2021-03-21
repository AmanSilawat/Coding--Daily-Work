function make_zero(arr) {
    let find_pos = {
        row: {},
        col: {}
    };
    let row_len = arr.length;
    let col_len = arr[0].length;

    // find position
    for (let row = 0; row < row_len; row++) {
        for (let col = 0; col < col_len; col++) {
            if (arr[row][col] == 0) {
                find_pos.row[row] = '';
                find_pos.col[col] = '';
            }
        }
    }

    // set zero
    for (let row = 0; row < row_len; row++) {
        for (let col = 0; col < col_len; col++) {
            if (typeof find_pos.row[row] != 'undefined') {
                arr[row][col] = 0;
            }
            if (typeof find_pos.col[col] != 'undefined') {
                arr[row][col] = 0;
            }
        }
    }

    return arr
}

let arr = [
    [1, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
];

let res = make_zero(arr);
console.log(res);