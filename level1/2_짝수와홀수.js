/**
 * 문제 설명
 * 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
 *
 * 제한 조건
 * num은 int 범위의 정수입니다.
 * 0은 짝수입니다.
 * @param num
 * @returns {string}
 */
function solution(num) {
    //반환할 변수 선언
    var answer = '';
    //num을 2로 나누었을때, 나머지값이 0이라면 짝수로 판단 그게 아니라면 홀수로 판단
    if((num % 2) == 0)
        answer = 'Even'
    else
        answer = 'Odd'
    return answer;
}

// 다른사람 풀이 중 괜찮았던거
// 애초에 num%2로하면 홀수 일경우 1 짝수일 경우 0을 반환하게 됨. 이유는 제한조건에 num은 int라고했기때문임.
// 그래서 삼항연산자를 이용해서 반대로 했으면 된거였음. 굳이 == 0을붙일 필요가 없었다.
// 굉장히 좋은 코드라고 보임.
function evenOrOdd(num) {
    return num % 2 ? "Odd" : "Even";
}