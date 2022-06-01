const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().split(' ');

console.log(input)

const n = Number(input[0]);
const m = Number(input[1]);


var answer = [];
let gcd = 1;
//최대공약수
for(let i=2; i<=Math.min(n, m); i++){
    if(n % i === 0 && m % i === 0){
        gcd = i;
    }
}
//최소공배수
let lcm = 1;

while(true){
    if((lcm % n == 0) && (lcm % m == 0)){
        break;
    }
    lcm++;
}
console.log(gcd)
console.log(lcm)
