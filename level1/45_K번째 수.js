/**
 * 문제 설명
 * 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
 *
 * 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
 *
 * array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
 * 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
 * 2에서 나온 배열의 3번째 숫자는 5입니다.
 * 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 *
 * 제한사항
 * array의 길이는 1 이상 100 이하입니다.
 * array의 각 원소는 1 이상 100 이하입니다.
 * commands의 길이는 1 이상 50 이하입니다.
 * commands의 각 원소는 길이가 3입니다.
 * 입출력 예
 * array    commands    return
 * [1, 5, 2, 6, 3, 7, 4]    [[2, 5, 3], [4, 4, 1], [1, 7, 3]]    [5, 6, 3]
 * 입출력 예 설명
 * [1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
 * [1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
 * [1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.
 */

function solution(array, commands) {
    var answer = [];
    //주어진 array에 제한조건이 담긴 command 만큼 반복문을 돈다.
    for(let i=0; i< commands.length; i++)
    {
        //제한조건의 시작인덱스는 0, 종료인덱스는 1의 인덱스에 가지고있고, 최종 구하려는 위치값을 알려준다.
        //그부분을 이용하여 array.slice를 이용하여 시작인덱스부터 종료위치까지 자르되 인덱스가 0부터 시작하는 것을 고려하여 시작인덱스-1을 해준다.
        let arr2 = array.slice(commands[i][0]-1,commands[i][1]);
        //오름차순 정렬
        arr2 = arr2.sort((a,b) => a-b);
        //최종구하려는 위치값에 위차한 값을 answer배열에 넣어준다.
        answer.push(arr2[commands[i][2] -1])
    }
    return answer;
}

//다른 사람 풀이중 괜찮았던 내용

function solution(array, commands) {
    var answer = [];

    answer = commands.map(a=>{
        return array.slice(a[0]-1,a[1]).sort((b,c)=>b-c)[a[2]-1];
    })
    return answer;
}
