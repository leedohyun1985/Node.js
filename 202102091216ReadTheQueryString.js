var http = require('http');

//create a server object: ���� ��ü�� ����
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); //����� �߰� �ѱ��� ����Ϸ��� charset �� ���� ���� 200�� OK�� �ǹ�
    res.write(req.url); //req�� url�� �޾Ƽ� �ۼ��ϰڴ� �ѱ� �ۼ��� ���� ����� ������ https://ko.wikipedia.org/wiki/%ED%8D%BC%EC%84%BC%ED%8A%B8_%EC%9D%B8%EC%BD%94%EB%94%A9 ����
    res.end(); //end the response ������ ��
}).listen(8080); //the server object listens on port 8080  8080��Ʈ�� ������ü�� �����