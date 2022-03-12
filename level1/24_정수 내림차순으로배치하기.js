/**
 * 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.
 *
 * 제한 조건
 * n은 1이상 8000000000 이하인 자연수입니다.
 * 입출력 예
 * n    return
 * 118372    873211
 */

function solution(n) {
    //문자열 치환 후 공백으로 문자 강제 분리
    //맵함수를 통해서 문자를 숫자로 치환함
    //sort함수를 사용하여 역정렬함 b-a
    //join함수를 사용하여 배열의 값들을 하나로 합침
    //문자열과 숫자의 사칙연산시 숫자화가 되는 것을 이용하여 *1로 사용함.

    var answer = n.toString().split('').map(a => Number(a)).sort((a,b) => b-a).join('')*1;
    return answer;
}


// 다른사람 풀이 중 괜찮았던거
// 나랑 다른점은 이사람은 먼저 기본 정렬로 오름차순으로 숫자를 배치한 뒤에
// reverse함수를 사용하여 역정렬 처리를 한점이 차이가 있음. 근데 별차이없는거같다.
function solution(n) {
    const newN = n + "";
    const newArr = newN
        .split("")
        .sort()
        .reverse()
        .join("");

    return +newArr;
}
