/**
 * 문제 설명
 * 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
 *
 * 제한 사항
 * s는 길이 1 이상, 길이 8 이하인 문자열입니다.
 * 입출력 예
 * s    return
 * "a234"    false
 * "1234"    true
 */

function solution(s) {
    //먼저 문자열의 길이가 4 또는 6이지 확인 후 길이가 맞으면 정규식을 통해서 0-9가 아닌것을 포함하고있는지 TEST함수를 통해
    //검증 받고 포함하지 않을 경우 TRUE를 리턴하는 식으로 잡았습니다.
    var answer = (s.length == 4||s.length ==6)?(!/[^0-9]/.test(s)):false
    return answer;
}

//// 다른사람 풀이 중 괜찮았던거
//정규식을 아래와 같이 써서 해결했는데 어떻게 해결했는지 검색이 필요함.
// \d 숫자만 검색 {N}최소 몇개
// 숫자의 개수가 6, 4개가 되지 않는 것들을 테스트함수를 통해서 TRUE FALSE로 반환함.
function alpha_string46(s){
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
}