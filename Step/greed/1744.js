// const [_, ...arr] = require("fs")
//   .readFileSync("d:\\backjun\\Programers_study\\Step\\greed\\exam.txt")
//   .toString()
//   .trim()
//   .split(/\s+/)
//   .map((v) => +v);
// console.log(arr);
// let answer = 0;
// const pos = arr.filter((v) => v > 0).sort((a, b) => b - a);
// const neg = arr.filter((v) => v <= 0).sort((a, b) => a - b);
// console.log(pos);
// console.log(neg);
// for (i = 0; i < pos.length; i += 2) {
//   if (i === pos.length - 1) answer += pos[i];
//   else if (pos[i] * pos[i + 1] > pos[i] + pos[i + 1]) {
//     answer += pos[i] * pos[i + 1];
//   } else {
//     answer += pos[i] + pos[i + 1];
//   }
// }

// for (i = 0; i < neg.length; i += 2) {
//   if (i === neg.length - 1) answer += neg[i];
//   else answer += neg[i] * neg[i + 1];
// }

// console.log(answer);
const path =
  process.platform === "linux"
    ? "/dev/stdin"
    : "d:\\backjun\\Programers_study\\Step\\greed\\exam.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
console.log(input);
input.shift();
input = input.map((v) => +v);
console.log(input);
let answer = 0;
const pos = input.filter((v) => v > 0).sort((a, b) => b - a);
const neg = input.filter((v) => v <= 0).sort((a, b) => a - b);
console.log(pos);
console.log(neg);
for (i = 0; i < pos.length; i += 2) {
  if (i === pos.length - 1) answer += pos[i];
  else if (pos[i] * pos[i + 1] > pos[i] + pos[i + 1]) {
    answer += pos[i] * pos[i + 1];
  } else {
    answer += pos[i] + pos[i + 1];
  }
}

for (i = 0; i < neg.length; i += 2) {
  if (i === neg.length - 1) answer += neg[i];
  else if (neg[i] * neg[i + 1] > neg[i] + neg[i + 1]) {
    answer += neg[i] * neg[i + 1];
  } else {
    answer += neg[i] + neg[i + 1];
  }
}

console.log(answer);
