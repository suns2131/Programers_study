//1546
// const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().trim().split('\r\n');
// const bottom = input.shift();
// const Data = input[0].split(' ');
// const max = Math.max(...Data);
// const array1 = Data.map((el) => el/max *100);
// const reduce = array1.reduce((acc,cur) => acc + cur);
// console.log(reduce/bottom)

//8958
const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().trim().split('\r\n');
input.shift();
for(let i =0; i < input.length; i+=1){
    const dt = input[i].split('');
    let cnt = 0;
    const maps = dt.map((el2) => {
        if(el2 === 'O') cnt++;
        else cnt = 0;
        return cnt;
    });
    console.log(maps.reduce((acc,cur) => acc + cur));
}

