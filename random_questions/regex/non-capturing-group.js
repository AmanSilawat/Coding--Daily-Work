function non_capturing_group(path){
    return String((path)).match(/(?:https?|ftp):\/\/([^\/\r\n]+)(\/[^\r\n]*)?/);
}

let result = non_capturing_group('https://google.com/gmail/abc');

console.log('domain: ', result[1]); // google.com
console.log('path: ', result[2]); // /gmail/abc