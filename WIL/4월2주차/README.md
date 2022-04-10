## 📆 2022년 4월 2주차 WIL

### 🌱 공부하면서 배운 점 정리

#### axios

#### axios란?
- 브라우저, Node.js를 위한 Promise API를 활용하는 비동기 통신 라이브러리 
- 백엔드와 프론트엔드사이의 통신을 쉽게해주는 라이브러리
- Fetch api와 비슷한 기능

#### axios 특징 
- 환경에 따른 브라우저의 XMLHttpRequest, Node.js의 Http api 사용 
- Priomise 사용 
- Http의 요청과 응답을 Json 형태로 자동 교체

#### axios 문법
```js
axios({
    url : '', //통신할 웹문서 
    method : 'get', //통신방식 get/post
    data: {
        test : '' //데이터 
    }
}) 
```
1. url : 서버주소 
2. method : 요청방식 
3. headers : 요청 헤더 
4. data : 요청방식이 'put', 'post', 'patch' 해당하는 경우 body에 보내는 데이터
5. params : url 파라미터(?key=value)
6. withCredentials : cross-site access-control 요청 허용 유무. 
7. auth : HTTP 기본인증에 사용 
8. proxy : proxy 서버의 hostname과 port를 정의하는 옵션

#### axios 서버 응답 
```js
{
    data : {}, //서버가 제공한 응답 
    status :200, //status는 서버 응답의 http 상태코드
    statusText : 'OK' //서버응답으로부터의 http 상태메세지
    headers : {},// 서버가 응답한 헤더는 모든 헤더가 소문자로 제공 
    config : {}, //요청에 대해 설정된 구성정보
    request : {} //응답을 생성한 요청
}
```

