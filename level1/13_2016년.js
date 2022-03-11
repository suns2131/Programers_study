/**
 * 문제 설명
 * 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT
 *
 * 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.
 *
 * 제한 조건
 * 2016년은 윤년입니다.
 * 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
 * 입출력 예
 * a    b    result
 * 5    24    "TUE"
 */

let input = 5;
let input2 = 24;


function solution(input, input2) {
    //요일에 대한 배열 선언
    let Days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    //전달받은 변수로 일자정보 생성
    let date = new Date('2016',input-1,input2);
    //해당일자의 요일정보값을 가진 인덱스로 배열에서 값 호출하여 반환환
   return Days[date.getDay()];
}
console.log(solution(input,input2))




// 다른사람 풀이 중 괜찮았던거
function getDayName(a,b){
    //일자 선언 후 문자열로 치환하면 가장 앞자리에 요일정보가 나옴
    //해당 요일정보를 대문자로 치환함. 신박했음.
    return new Date(2016,a-1,b).toString().slice(0,3).toUpperCase();
}