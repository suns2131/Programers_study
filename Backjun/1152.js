//1152
// const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().trim();
// console.log(input)
// const Data = input.split(' ');
// console.log(Data.length)

//2908
const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().trim().split(' ');
const Data = input.map((el) => {
    const detail_el = Array.from(el);
    detail_el.reverse();
    return parseInt(detail_el.join(''));
})
console.log(Math.max(...Data));