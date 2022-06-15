const path = 'd:\\backjun\\Programers_study\\Step\\inoutput\\exam.txt';
// const path = '/dev/stdin';
const input = require('fs').readFileSync(path).toString().trim().split('\r\n');
console.log(input)
for(let i=0; i < input.length; i+=1){
	console.log(input[i])
}