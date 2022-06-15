const path = 'd:\\backjun\\Programers_study\\Step\\inoutput\\exam.txt';
// const path = '/dev/stdin';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
for(let i=0; i < input.length-1; i+=1){
	const Data = input[i].split(' ').map(v => v*1);
	console.log(Data[0] + Data[1]);
}