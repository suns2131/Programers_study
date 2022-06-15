const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().split('\r\n');

console.log(input)

const loopcnt = input.shift();
let answer = 0;
let stack = '';
for(let i=0; i<loopcnt; i++)
{
    let Arrayinput = Array.from(input[i]);
    console.log(Arrayinput)
    for(let j=0 ; j < Arrayinput.length; j++)
    {
        console.log(Arrayinput[j])
        if(Arrayinput[j]==="(")
            answer += +1
        else
            answer += -1
        console.log(answer)
        if(answer < 0)
        {
            stack += 'NO\n'
        }
    }
    if(answer === 0)
    {
        stack += 'YES\n'
        answer = 0;
        console.log(stack)
    }
    else
    {
        stack += 'NO\n'
        answer = 0;
        console.log(stack)
    }
}
console.log(answer,stack)