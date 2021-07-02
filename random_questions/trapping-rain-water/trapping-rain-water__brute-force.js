function trappingRainWater(arr) {
    result = 0;
    for (let i = 0; i < arr.length; i++) {
        let left_max = 0;
        let right_max = 0;
        for (let j = 0; j <= i; j++) {
            left_max = Math.max(left_max, arr[j]);
        }
        for (let k = i; k < arr.length; k++) {
            right_max = Math.max(right_max, arr[k]);
        }
        result += Math.min(left_max, right_max) - arr[i];
    }

    return result;
}





var arr = [2, 0, 2]; // 2
console.log(trappingRainWater(arr));

var arr = [3, 0, 2, 0, 4]; // 7
console.log(trappingRainWater(arr));

var arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; // 6
console.log(trappingRainWater(arr));





// !Explanation
function trappingRainWater_explanation(arr) {
    result = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log('\n\n')
        console.log(arr, ', current=', arr[i]);
        let left_max = 0;
        let right_max = 0;
        for (let j = 0; j <= i; j++) {
            let l_max_prev = left_max;
            left_max = Math.max(left_max, arr[j]);
            console.log('lm=', l_max_prev, ',j=', arr[j], 'm=', left_max)
        }
        console.log('***');
        for (let k = i; k < arr.length; k++) {
            let r_max_prev = right_max;
            right_max = Math.max(right_max, arr[k]);
            console.log('rm=', r_max_prev, ',j=', arr[k], 'm=', right_max)
        }
        let prev_result = result;
        result += Math.min(left_max, right_max) - arr[i];
        console.log('-----------', 'left_max=', left_max, ', right_max=', right_max);
        console.log('-----------', prev_result, '+=', Math.min(left_max, right_max), '-', arr[i], 'result=', result);
    }

    return result;
}