/**
 * 문제 설명
 * 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * numbers의 길이는 2 이상 100 이하입니다.
 * numbers의 모든 수는 0 이상 100 이하입니다.
 * 입출력 예
 * numbers    result
 * [2,1,3,4,1]    [2,3,4,5,6,7]
 * [5,0,2,7]    [2,5,7,9,12]
 * 입출력 예 설명
 * 입출력 예 #1
 *
 * 2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
 * 3 = 2 + 1 입니다.
 * 4 = 1 + 3 입니다.
 * 5 = 1 + 4 = 2 + 3 입니다.
 * 6 = 2 + 4 입니다.
 * 7 = 3 + 4 입니다.
 * 따라서 [2,3,4,5,6,7] 을 return 해야 합니다.
 * 입출력 예 #2
 *
 * 2 = 0 + 2 입니다.
 * 5 = 5 + 0 입니다.
 * 7 = 0 + 7 = 5 + 2 입니다.
 * 9 = 2 + 7 입니다.
 * 12 = 5 + 7 입니다.
 * 따라서 [2,5,7,9,12] 를 return 해야 합니다.
 **/

function solution(numbers) {
    var answer = [];
    var answer2 = 0;
    //이중 포문을 통해 number 배열에 있는 값 비교
    for(let i= 0; i < numbers.length; i++)
    {
        for(let j= 0 ;j < numbers.length; j++)
        {
            //같은 인덱스가 아닐때만 하도록 함.
            if(i != j)
            {
                answer2 = (numbers[i]*1) + (numbers[j]*1)
                //배열에 해당 문자가 있는 검사 후 없으면 push
                if(!answer.includes(answer2))
                    answer.push(answer2)
            }
        }
    }
    //오름 차순 정렬
    answer.sort((a,b) => a - b);
    return answer;
}

