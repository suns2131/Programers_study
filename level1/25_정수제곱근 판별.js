/**
 * 문제 설명
 * 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
 * n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
 *
 * 제한 사항
 * n은 1이상, 50000000000000 이하인 양의 정수입니다.
 * 입출력 예
 * n    return
 * 121    144
 * 3    -1
 * 입출력 예 설명
 * 입출력 예#1
 * 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.
 *
 * 입출력 예#2
 * 3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.
 */


function solution(n) {
    //sqrt를 이용하여 받아온 제곱근의 값을 루트로 나눈다.
    //루트로 나누었을떄 정수로 떨어지지 않으면 양의 정수 제곱근이 아니라고 판단
    //삼항연산자를 사용하여 1로 나누었을때 0으로 떨어지지않으면 -1 반환 아니라면 루트로 나눈값에 +1 을하여 제곱한 값을 반환함.
    return Math.sqrt(n)%1 == 0? Math.pow(Math.sqrt(n)+1,2):-1 ;
}