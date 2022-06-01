//10818
const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().split('\r\n');
console.log(input)
input.shift();
console.log(input[0].split(' '))
const data = input[0].split(' ');
console.log( Math.min(...data))
console.log( Math.max(...data))


//2562
// const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().split('\r\n');
// console.log(input)
// const max = Math.max(...input).toString();
// console.log(max)
// console.log(input.indexOf(max)+1);