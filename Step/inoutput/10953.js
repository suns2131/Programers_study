const path = 'd:\\backjun\\Programers_study\\Step\\inoutput\\exam.txt';
// const path = '/dev/stdin';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
console.log(input)
input.shift();
for(let i=0; i < input.length; i+=1){
	const Data = input[i].split(',').map(v => v*1);
	console.log(Data[0] + Data[1]);
}