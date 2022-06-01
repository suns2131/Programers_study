//4344
const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().trim().split('\r\n');
input.shift();
for(let i=0; i< input.length; i+=1){
    const Data = input[i].split(' ');
    const bottom = Data.shift();
    const average = Data.reduce((acc,cur) => (acc*1) + (cur*1)) / bottom;
    const upList = Data.filter((el) => el > average );
    const persent = (upList.length / bottom)*100
    console.log(`${persent.toFixed(3)}%`)
}

