const path = 'd:\\backjun\\Programers_study\\Step\\inoutput\\exam.txt';
// const path = '/dev/stdin';
let input = require('fs').readFileSync(path).toString();
console.log(input)
while(input.length > 0){
	if(input.length > 10){
		const data = input.substring(0,10);
		console.log(data);
		input = input.substring(10);
	}
	else{
		console.log(input);
		input = '';
	}
}