//4344
// const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().trim().split('\r\n');
// input.shift();
// for(let i=0; i< input.length; i+=1){
//     const Data = input[i].split(' ');
//     const bottom = Data.shift();
//     const average = Data.reduce((acc,cur) => (acc*1) + (cur*1)) / bottom;
//     const upList = Data.filter((el) => el > average );
//     const persent = (upList.length / bottom)*100
//     console.log(`${persent.toFixed(3)}%`)
// }

//4673
function d(n){
    let temp = n;
    let sum = temp;

    while (temp > 0){
        sum += temp % 10;
        temp = parseInt(temp/10);
    }
    return sum;
}

function selfnum(n){
    let selfnum = []
    let result = []

    for(let i=1; i <= n; i++){
        if(d(i) <= n){
            selfnum[d(i)] = i;
            // if(!selfnum[i]) console.log(i);

        }
    }
    for(let i=1; i<= n; i++){
        if(!selfnum[i]) result.push(i);
    }

    for(let i=0; i < result.length; i+=1){
        console.log(result[i]);
    }
}

selfnum(100)