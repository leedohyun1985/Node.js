var http = require('http');
var url = require('url');

//create a server object: ���� ��ü�� ����
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); //����� �߰� �ѱ��� ����Ϸ��� charset �� ���� ���� 200�� OK�� �ǹ�
    var q = url.parse(req.url, true).query; //URL ����� url ������ �����ͼ� �м��ϰų� ���ڿ��� �ٲٴ� ���� ����� �� parse�� url ���ڿ��� url ��ü�� ��ȯ�ؼ� �����Ѵ�.
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080); //the server object listens on port 8080  8080��Ʈ�� ������ü�� �����

// http://localhost:8080/?year=2017&month=July ȣ���ϸ� ������ ���´�