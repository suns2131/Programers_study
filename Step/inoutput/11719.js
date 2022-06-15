const path = 'd:\\backjun\\Programers_study\\Step\\inoutput\\exam.txt';
// const path = '/dev/stdin';
const input = require('fs').readFileSync(path).toString().split('\r\n');
for(let i=0; i < input.length; i+=1){
	console.log(input[i]);
}