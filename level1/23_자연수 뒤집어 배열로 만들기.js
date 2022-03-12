/**
 * 문제 설명
 * 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
 *
 * 제한 조건
 * n은 10,000,000,000이하인 자연수입니다.
 * 입출력 예
 * n    return
 * 12345    [5,4,3,2,1]
 */

function solution(n) {
    //문자열에 ''강제로 더하여 문자열화
    //split('')으로 강제 문자 분리
    //map을 통해 분리된 문자열의 요소를 확인하여 요소 각개별로 Number로 치환하여 배열 생성
    //생성된 배열은 리버스 함수를 이용하여 뒤집기.
    var answer = (n+'').split('').map(e => Number(e)).reverse();
    return answer;
}


// 다른사람 풀이 중 괜찮았던거
function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    // 빈 배열에 들어온 자연수를 10으로 나눈 나머지의 값을 밀어넣고 floor를 이용하여 나눈 몪의 값만 유지하고 나머지는 버려버림
    //이런식으로 배열에 집어넣으면 역순으로 배열이생김. 

    var arr = [];
    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);
    return arr;
}