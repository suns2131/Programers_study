/**
 * 문제 설명
 * 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
 * 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
 *
 * 제한사항
 * N의 범위 : 100,000,000 이하의 자연수
 * 입출력 예
 * N    answer
 * 123    6
 * 987    24
 * 입출력 예 설명
 * 입출력 예 #1
 * 문제의 예시와 같습니다.
 *
 * 입출력 예 #2
 * 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.
 */

function solution(n)
{   let num = 0;
    //숫자n에 강제로 공백을 추가하여 문자열화하고 해당 문자열을 공백없이 분리함.
    //reduce함수를 이용하여 누산기 시작값을 0(숫자)로 설정하고
    //cur값은 문자이니 Number로 치환하여 숫자화 시켜서 값을 더하였음.
    var answer = (n +'').split('').reduce((acc,cur) => acc += Number(cur),0);
    return answer;
}