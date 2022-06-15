const input = require('fs').readFileSync('d:\\backjun\\Programers_study\\Step\\inoutput\\exam.txt').toString().split('\n');
console.log(input)
for(let i=0; i < input.length-1; i+=1){
	const Data = input[i].split(' ');
	console.log(Number(Data[0]) + Number(Data[1]));
}