var http = require('http');

//create a server object: 서버 객체를 만듬
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); //헤더를 추가 한글을 출력하려면 charset 도 세팅 상태 200은 OK를 의미
    res.write('Hello World!'); //write a response to the client 클라이언트에게 응답을 작성
    res.end(); //end the response 응답의 끝
}).listen(8080); //the server object listens on port 8080  8080포트로 서버객체를 듣게함