const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().split('\r\n');

// console.log(input)

const loopcnt = input.shift();
const answer = [];
console.log(loopcnt,input)

for(let i=0; i < loopcnt; i++)
{
    if(input[i] === '0')
        answer.pop()
    else
        answer.push(Number(input[i]));
}

console.log(answer.reduce((arr,cur) => arr += cur));