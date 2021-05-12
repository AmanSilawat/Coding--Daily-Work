let arr = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2'
];

const makeCallInSequence = (apiArray, callback) => {
    let i = 0,
        result = [];
    const onResponse = response => {
        result.push(response);
        i++;
        if (i < apiArray.length) {
            request(apiArray[i]);
        } else {
            callback(result);
        }
    }

    const request = api => {
        fetch(api).then(onResponse).catch(onResponse);
    }

    request(apiArray[0])
}

const cb = responses => Promise.all(responses.map(response => response.json()))
    .then(data => console.log(data));
    
makeCallInSequence(arr, cb);