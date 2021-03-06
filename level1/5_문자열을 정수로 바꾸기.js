/**
 * 문제 설명
 * 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
 *
 * 제한 조건
 * s의 길이는 1 이상 5이하입니다.
 * s의 맨앞에는 부호(+, -)가 올 수 있습니다.
 * s는 부호와 숫자로만 이루어져있습니다.
 * s는 "0"으로 시작하지 않습니다.
 * 입출력 예
 * 예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
 * str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.
 */
function solution(s) {
    //Number와 parseInt의 차이
    //Number는 안에 문자열이 있으면 NaN 반환. > 온전히 숫자만 있을때 사용해야함.
    //parseInt는 안에 문자열이 있어도 숫자를 반환하지만 문자열을 만나기전까지의 숫자만 반환한다.
    //공통적으로 시작 문자가 숫자가 아닐경우 둘다 NaN 리턴함.
    let v = Number(s);
    return parseInt(s);
}
//다른사람 풀이 중 괜찮았던거
//자바스크립트의 특징 중 하나인 동적언어을 활용하였음.
//+을 제외한 사칙연산자는 피연산자에 문자열이 있을경우에 숫자형으로 자동변환 시킨다. > 생각하지도 못한 방법이었음.
function strToInt(str){
    return str/1
}