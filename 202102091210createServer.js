var http = require('http');

//create a server object: ���� ��ü�� ����
http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client Ŭ���̾�Ʈ���� ������ �ۼ�
    res.end(); //end the response ������ ��
}).listen(8080); //the server object listens on port 8080  8080��Ʈ�� ������ü�� �����