//11720
// const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().trim().split('\r\n');
// input.shift();
// const Data = Array.from(input[0])
// const reduce = Data.reduce((acc,cur) => (acc*1)+(cur*1));
// console.log(reduce)

//10809
const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().trim();
const alpa = Array.from({length: 26}, (v,i) => String.fromCharCode((i+97)));
const result = alpa.map((el) => input.indexOf(el));
console.log(result.join(' '))