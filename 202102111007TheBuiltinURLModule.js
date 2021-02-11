// ��Ʈ�� url ��� �� �ּҸ� ���� �� �ִ� ��Ʈ��� �и��Ѵ�

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);
//url.parse()�� url ��ü�� ������Ƽ�� �� �ּ��� �� ��Ʈ��� ��ȯ�Ѵ�

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'
//console.log �� �ֿܼ� �α���� ���

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
//query�� ����ϸ� json �������� ��ȯ�ϴ� ��?
console.log(qdata.month); //returns 'february'