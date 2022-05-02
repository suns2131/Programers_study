const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().split(' ');

console.log('input')

//변수 선언
const upLength = input[0];
const downLength = input[1];
const totalLength = input[2];
console.log(upLength,downLength,totalLength)
//하루에 올라갈 수 있는 범위 (더 올라가야할 범위가 존재하는경우)
const Today = upLength - downLength;
//최소 일수를 구할 수 있는 수식  (미끄러지는 조건을 감안하여 down을 제외하면 최소한의 일 수를 구할수 있음.)
let minDays = Math.floor((totalLength - downLength) / Today);

//최소 일수 계산식에 나머지가 있을 경우 하루가 더 필요한 것이기 때문에 +1
if((totalLength - downLength) % Today !== 0)
    minDays++;

console.log(minDays)
