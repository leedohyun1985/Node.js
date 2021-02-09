var http = require('http');

//create a server object: 서버 객체를 만듬
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); //헤더를 추가 한글을 출력하려면 charset 도 세팅 상태 200은 OK를 의미
    res.write(req.url); //req의 url을 받아서 작성하겠다 한글 작성시 문제 생기는 이유는 https://ko.wikipedia.org/wiki/%ED%8D%BC%EC%84%BC%ED%8A%B8_%EC%9D%B8%EC%BD%94%EB%94%A9 참조
    res.end(); //end the response 응답의 끝
}).listen(8080); //the server object listens on port 8080  8080포트로 서버객체를 듣게함