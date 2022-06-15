//2577
// const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().split('\r\n');
// const reduce =String(input[0] * input[1] * input[2]);
// const arrays = Array.from(reduce);
//
// for (let i=0; i < 10; i+=1){
//  console.log(arrays.filter((el) => el === i.toString()).length)
// }

//3052
const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().trim().split('\r\n');
const Data = input.map((el)=> el%42 );
const set = new Set(Data);
const arrays = [...set];
console.log(arrays.length);
