/*
 NPM�� Node.js ��Ű��, ����� ���� ��Ű�� �Ŵ����̴�.
 www.npmjs.com�� �ٿ�ε� �ް� �� �� �ִ� ��õ���� ���� ��Ű������ ȣ��Ʈ�Ѵ�. 
 NPM ���α׷��� ���� Node.js�� ��ġ�� �� ��ǻ�Ϳ� ��ġ�Ǿ���.
 ��, NPM�� �̹� �� ��ǻ�Ϳ��� ��밡���ϴ�.

��Ű���� �����ΰ�?
Node.js�� ��Ű���� ����� ���� �ʿ��ϴ� ��� ������ �����ϰ� �ִ�.
����� ����� ������Ʈ�� ������ �� �ִ� �ڹٽ�ũ��Ʈ ���̺귯���̴�.

��Ű�� �ٿ�ε� ���

�ٿ�ε�� �ſ� ����
the command line interface �� ���� ���� �ʿ�� �ϴ� ��Ű���� �ٿ�ε� �϶�� NPM�� ���ϸ� �ȴ�.
upper-case�� �Ҹ��� ��Ű���� �ٿ�ε� �غ���

C:\Users\Your Name>npm install upper-case

path ��ġ�� �ٲٴ� ������ �ȵ� �Ƹ� npm�� path�� ���� ��ġ ��ġ�� ������ �� ���� <- �̰͵� �ƴ�

npm init 
�� ��ɾ ���� ����Ǿ�� ��
������Ʈ���� ������ �� ����ϸ� �Ǵ� �� ������ �׳� �����ص� �⺻ ������ ��

�ش� ���ϵ��� �� �޾�����
 
 */


var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(uc.upperCase("Hello World!")); //�빮�ڷ� ��ȯ��
    res.end();
}).listen(8080);