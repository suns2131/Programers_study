const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString();

console.log(input)

let cycle_num = Number(input);
let cycle = 0;

let cycle_plus;
while (true)
{
    cycle_plus = Math.floor(cycle_num / 10) + cycle_num % 10;
    console.log(cycle_plus)
    cycle_num = ((cycle_num % 10) * 10) + (cycle_plus % 10);
    console.log(cycle_num)
    cycle++;
    if (Number(input) === cycle_num) {
        break;
    }
}

console.log(`cycle` + cycle)