/**
 * 문제 설명
 * 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
 * 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
 *
 * 제한 조건
 * a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
 * a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
 * a와 b의 대소관계는 정해져있지 않습니다.
 */
let input = 3;
let input2 = 5;

function s(x,y){
    let total=0;
    if(x!=y)
    {
        //X-y값이 다를경우 둘중에서 최소값 및 최대값을 뽑아내어 반복문을 통해 더한다.
        for(let i = Math.min(x,y); i <= Math.max(x,y); i++)
            total += i;
            console.log(total);
        return total;
    }
    else
        return total = x;
}
console.log(s(input,input2))

//다른사람 풀이 중 괜찮았던거
//가우스 공식을 이용함. (양끝의 합)X(중간숫자의개수)/2
//중간 숫자의 개수는 절대값을 구하는 abs를 이용하여 값이 음수든 양수든 절대값인 양수를 구하면 맨 끝의 숫자를 제외한 카운트이기때문에
//+1하여 정확한 개수를 가져와서 가우스 공식을 적용한다.
function adder(a, b){
    //함수를 완성하세요
    return (a+b)*(Math.abs(b-a)+1)/2;
}
console.log( adder(3, 5) )