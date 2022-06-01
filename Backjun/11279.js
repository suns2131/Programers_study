const input = require('fs').readFileSync('D:\\study\\Programers\\예제.txt').toString().split(' ');

console.log(input)

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    isEmpty() {
        return this.heap.length === 0;
    }
    insert(data){
        this.heap.push(data);
        this.heapifyUp();
    }
    delete(){
        const data = this.heap[0];

        if(this.heap.length > 1){
            const last = this.heap.length -1;
            [this.heap[0], this.heap[last]] = [this.heap[last], this.heap[0]];
            this.heap.pop();

            this.heapifyDown();
        } else {
            this.heap.pop();
        }
        return data;
    }
    heapifyUp() {
        let currentIndex = this.heap.length -1;
        const currentData = this.heap[currentIndex];

        while (currentIndex > 0 ){
            const parentIndex = Math.floor((currentIndex -1) /2);
            const parentData = this.heap[parentIndex];

            if(currentData < parentData) break;

            this.heap[currentIndex] = parentData;
            currentIndex = parentIndex;
        }
    }
    heapifyDown(){
        let currentIndex = 0;
        const currentData = this.heap[currentIndex];

        while(currentIndex < this.heap.length){
            const leftChildIndex = currentIndex * 2 + 1;
            const rightChildIndex = currentIndex * 2 + 2;

            if(leftChildIndex >= this.heap.length) break;

            const leftChildData = this.heap[leftChildIndex];
            const rightChildData = rightChildIndex < this.heap.length ? this.heap[rightChildIndex] : null;

            const biggerIndex = rightChildData !== null && rightChildData >= leftChildData ?
                rightChildIndex : leftChildIndex;
            const biggerData = this.heap[biggerIndex];

            this.heap[currentIndex] = biggerData;
        }
        this.heap[currentIndex] = currentData;
    }
}

const n = +input[0];
const maxHeap = new MaxHeap();

const log = [];

for(let i = 1; i <= n; i++){
    if(+input[i] === 0){
        if(!maxHeap.isEmpty()){
            log.push((maxHeap.delete()));
        } else {
            log.push(0);
        }
     }else {
        maxHeap.insert(+input[i])
    }
}

console.log(log.join('\n'))




// const loopcnt = input.shift();
// const heap = [];
// let answer = '';
// for(let i=0; i < loopcnt; i++)
// {
//     if(input[i] === '0')
//     {
//         const da = heap.sort().pop();
//         answer += (da === undefined? 0 : da) + '\n'
//     }
//     else
//     {
//         heap.push(Number(input[i]))
//     }
// }
// console.log(answer)
