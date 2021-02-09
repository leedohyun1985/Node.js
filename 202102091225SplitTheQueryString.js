var http = require('http');
var url = require('url');

//create a server object: 서버 객체를 만듬
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); //헤더를 추가 한글을 출력하려면 charset 도 세팅 상태 200은 OK를 의미
    var q = url.parse(req.url, true).query; //URL 모듈은 url 정보를 가져와서 분석하거나 문자열로 바꾸는 등의 기능을 함 parse는 url 문자열을 url 객체로 변환해서 리턴한다.
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080); //the server object listens on port 8080  8080포트로 서버객체를 듣게함

// http://localhost:8080/?year=2017&month=July 호출하면 값들이 나온다