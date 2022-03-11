/**
 * 문제 설명
 * 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * 1 ≤ numbers의 길이 ≤ 9
 * 0 ≤ numbers의 모든 원소 ≤ 9
 * numbers의 모든 원소는 서로 다릅니다.
 * 입출력 예
 * numbers    result
 * [1,2,3,4,6,7,8,0]    14
 * [5,8,4,0,6,7,9]    6
 * 입출력 예 설명
 * 입출력 예 #1
 *
 * 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
 * 입출력 예 #2
 *
 * 1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.
 */

let input = [1,2,3,4,9];

function s(x){
    let values=0;
    for(let i=0; i<=9; i++)
    {
        //indexof의 속성인 있으면 0리턴 없을경우 -1 리턴을하는 것을 이용하여 -1 리턴하는 것들만 더하였음.
        //includes를 사용하여 true/false로 판단하는 것이 더 가독성이 좋아보임.
        if( x.indexOf(i) == -1)
            values+=i;

    }
    return values;
}
console.log(s(input))

//다른사람 풀이 중 괜찮았던거
//Array(배열).reduce((accumulator, number)
//accumulator 누적되는 변수 따로 초기값 지정안하면 배열의 첫번째 인덱스부터 시작
//number 배열 요소 값(여기까진 필수)
//  cur + acc, 0 여기서 0은 누산기(accumulator)의 초기값임.
//타겟 배열(없으면 연결된 배열이 디폴트로 잡히는듯)
function solution(numbers) {

    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

//reduce 공부한거
// 배열에서 양수의 개수와 음수의 개수를 분리하여 저장할때
// current value의 값을 이용하여 분리하여 전달할수있음 마지막에 배열정보를 전달하면 해당 상태로 저장되는듯함.
// 굉장히 유용한 기능인거같음. 잘 활용할수있도록 개념을 확립해야할듯.
let input = [1,2,3,4,-5,-6,-7];
let values4 = x.reduce((acc,cur,idx) => {
    if(cur < 0)
        acc[0]++;
    else if(cur > 0)
        acc[1]++;
    return acc;
},[0,0]);
