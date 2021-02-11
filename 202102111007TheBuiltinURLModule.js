// 빌트인 url 모듈 웹 주소를 읽을 수 있는 파트들로 분리한다

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);
//url.parse()는 url 객체를 프로퍼티로 된 주소의 각 파트들로 반환한다

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'
//console.log 는 콘솔에 로그찍는 기능

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
//query를 사용하면 json 형식으로 반환하는 듯?
console.log(qdata.month); //returns 'february'