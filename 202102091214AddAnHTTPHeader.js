var http = require('http');

//create a server object: ���� ��ü�� ����
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); //����� �߰� �ѱ��� ����Ϸ��� charset �� ���� ���� 200�� OK�� �ǹ�
    res.write('Hello World!'); //write a response to the client Ŭ���̾�Ʈ���� ������ �ۼ�
    res.end(); //end the response ������ ��
}).listen(8080); //the server object listens on port 8080  8080��Ʈ�� ������ü�� �����