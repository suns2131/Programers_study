/**
 * 문제 설명
 * 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
 *
 * 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
 * (1은 소수가 아닙니다.)
 *
 * 제한 조건
 * n은 2이상 1000000이하의 자연수입니다.
 * 입출력 예
 * n    result
 * 10    4
 * 5    3
 * 입출력 예 설명
 * 입출력 예 #1
 * 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환
 *
 * 입출력 예 #2
 * 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환
 */

function solution(n) {
    const arr = [];

    // 인덱스 번호가 주어진 숫자 n과 대응하도록
    // 빈 배열을 만들고 원소는 true 값으로 채워준다.
    // 여기서 true 는 소수라는 의미이다.
    // 배열은 0부터 시작하므로, 주어진 숫자 n에 1을 더해준다.
    for (let i = 0; i < n + 1; i += 1) {
        arr.push(true);
    }
    console.log(arr)
    // 주어진 수의 제곱근까지만 계산해서 불필요한 반복을 최소화한다.
    // arr[i] 가 소수일 경우, 반복문을 진행한다.
    // 맨 처음 시작하는 2는 소수이므로,
    // 2를 제외한 2의 제곱부터, 제곱 값만 체크하여 지워나간다.
    // 제곱근까지 반복한다.
    for (let i = 2; i * i <= n; i += 1) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    console.log(arr)
    // 0과 1은 소수가 아니므로 false 값으로 바꿔준다.
    arr.splice(0, 2, false, false);

    // 배열에서 true인 값만 걸러내고, true인 값의 개수를 출력한다.
    const result = arr.filter((value) => {
        return value !== false;
    })

    return result.length;
}