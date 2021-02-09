var http = require('http');

//create a server object: 서버 객체를 만듬
http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client 클라이언트에게 응답을 작성
    res.end(); //end the response 응답의 끝
}).listen(8080); //the server object listens on port 8080  8080포트로 서버객체를 듣게함