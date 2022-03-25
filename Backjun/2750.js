//2750,2751
const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().trim().split('\r\n');
input.shift();
input.sort((a,b) => a-b);
console.log(input)
let data = input.join('\n');
console.log(data);


