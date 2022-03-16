/**
 *
 */
//몰라서 답지 보고함
function solution(d, budget) {
    var answer = 0, sum = 0;
    //오름 차순으로 정렬
    d.sort((a,b) => a - b);
    console.log(d)
    //리듀스를 통해서 순차적으로 요소를 더한 값(sum)과 지갑의 금액을 비교하여 더했을때 금액이 오버될 경우
    //해당 수를 빼고 카운트 1 차감 
    answer = d.reduce((acc,cur) =>{
        acc++;
        sum += cur;
        if(sum > budget)
            acc--;
        return acc;
    },0)
    return answer;
}

