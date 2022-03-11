/**
 * 문제 설명
 * 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
 *
 * 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
 *
 * 제한사항
 * 문자열 s의 길이 : 50 이하의 자연수
 * 문자열 s는 알파벳으로만 이루어져 있습니다.
 * 입출력 예
 * s    answer
 * "pPoooyY"    true
 * "Pyy"    false
 * 입출력 예 설명
 * 입출력 예 #1
 * 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.
 *
 * 입출력 예 #2
 * 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.
 *
 * ※ 공지 - 2021년 8월 23일 테스트케이스가 추가되었습니다.
 */

function solution(s){
    //문자열을 소문자로 강제 치환 후 match함수를 이용하여 입력한 문자열로 이루어진 배열을 생성함.
    //그런데 입력한 문자열에 포함되지않은 배열의 경우 null을 리턴하기 때문에 .length 사용에 에러가 발생하여
    //삼항연산자를 이용하여 예외사항을 제거하였음.
    //그래서 a==b가 같은경우 true 아닐경우 false를 반환하도록 리턴값 설정.
    let a = (s.toLowerCase().match(/p/g))?s.toLowerCase().match(/p/g).length:0;
    let b = (s.toLowerCase().match(/y/g))?s.toLowerCase().match(/y/g).length:0;
    let answer = (a == b);
    return answer;
}
