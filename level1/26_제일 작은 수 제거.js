/**
 * 문제 설명
 * 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
 *
 * 제한 조건
 * arr은 길이 1 이상인 배열입니다.
 * 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
 * 입출력 예
 * arr    return
 * [4,3,2,1]    [4,3,2]
 * [10]    [-1]
 */

function solution(arr) {
    //필터를 통해서 정수의 배열의 가장 작은 값을 제외한 값들만 저장되도록함
    //Math.min.apply()함수를 통해서 배열 값을 검사.
    var answer = arr.filter(el => el > Math.min.apply(null,arr))
    //구성된 배열의 길이를 확인하여 길이가 0일 경우에는 새로운 배열을 생성후 그 안에 -1로채워서 리턴함.
    return (answer.length > 0 ?answer : Array(1).fill(-1));
}
