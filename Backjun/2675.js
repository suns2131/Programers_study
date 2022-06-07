// 2675
const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().trim().split('\r\n');
input.shift();

for(let i=0; i < input.length; i+=1){
    const Data = input[i].split(' ');
    const loopCnt = parseInt(Data.shift());
    // let result = '';
    const arrays = Array.from(Data.toString());
    const result = arrays.reduce((acc, cur) => acc + cur.repeat((loopCnt)));
    // for(let j=0; j < arrays.length; j+=1){
    //     result += arrays[j].repeat(loopCnt);
    // }
    console.log(result)
}

// 1157
// const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().trim().split('\r\n');
// const Data = Array.from(input.toString().toUpperCase());
// const dt1 = new Set(Data);
// const unique = [...dt1];
// const result = [];
// for(let i=0; i < unique.length; i+=1){
//     result.push(Data.filter((el) => el === unique[i]).length)
//
// }
// const dt2 = result.filter((el) => el === Math.max(...result));
// if(dt2.length === 1)
//     console.log(unique[result.indexOf(Math.max(...result))].toUpperCase())
// else
//     console.log('?');
