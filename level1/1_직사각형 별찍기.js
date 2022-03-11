/**
 * 문제 설명
 * 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
 * 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
 * 제한 조건
 * n과 m은 각각 1000 이하인 자연수입니다.
 */


//프로세스 객체를 통하여 stdin 입력 모듈 선언
process.stdin.setEncoding('utf8');
//프로세스 객체를 통해서 data 전달 받음.
process.stdin.on('data', data => {
    //전달받은 data를 split을 통해서 값 분리
    const n = data.split(" ");
    //분리한 값을 개별 변수에 저장
    const a = Number(n[0])
    const b = Number(n[1]);
    //repeat함수를 사용하여 가로길이 만큼 원하는 문자열을 반복시켜서 저장.
    let star = '*'.repeat(a);
    //반복시켜 저장한 문자열을 세로 길이만큼 반복실행.
    for (let i=0; i < b; i++)
    {
        console.log(star);
    }

});


// 다른사람 풀이 중 괜찮았던거
// 코드가 굉장히 간결해서 좋았음.
// 하지만 이런식으로 저장한 데이터해서 뭔가를 뽑아낼때, \n을 걸러내는 작업이 추가적으로 필요할거같았음.
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    console.log((('*').repeat(a)+`\n`).repeat(b))
});
