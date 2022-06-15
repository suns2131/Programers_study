//5622
// const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().trim();
// const Dt = Array.from(input);
// const numbers = Array.from({length:8}, (v,i)=> i+2);
// const strs = ['ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ'];
// const result = [];
// for(let i=0; i < Dt.length; i+=1){
//     for(let j=0; j < strs.length; j+=1){
//         const search = strs[j].indexOf(Dt[i]);
//         if(search !== -1) result.push(j);
//     }
// }
// console.log(result.map((el) => numbers[el] +1).reduce((acc,cur) => acc+cur))

//2941
let input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().trim();
const alpa = ['c=','c-','dz=','d-','lj','nj','s=','z='];
let answer = 0
for(let i=0; i < alpa.length; i+=1){
    while (input !== input.replace(alpa[i],'')){
        answer+=1;
        input = input.replace(alpa[i],' ')
    }
}
const noAlpa = input.split(' ').join('').length
console.log(answer + noAlpa);
