/*
 NPM은 Node.js 패키지, 모듈을 위한 패키지 매니저이다.
 www.npmjs.com은 다운로드 받고 쓸 수 있는 수천개의 무료 패키지들을 호스트한다. 
 NPM 프로그램은 내가 Node.js를 설치할 때 컴퓨터에 설치되었다.
 즉, NPM은 이미 내 컴퓨터에서 사용가능하다.

패키지는 무엇인가?
Node.js의 패키지는 당신이 모듈로 필요하는 모든 파일을 포함하고 있다.
모듈은 당신의 프로젝트에 포함할 수 있는 자바스크립트 라이브러리이다.

패키지 다운로드 방법

다운로드는 매우 쉽다
the command line interface 을 열고 내가 필요로 하는 패키지를 다운로드 하라고 NPM에 말하면 된다.
upper-case라 불리는 패키지를 다운로드 해보자

C:\Users\Your Name>npm install upper-case

path 위치를 바꾸니 실행이 안됨 아마 npm의 path가 최초 설치 위치와 동일한 것 같음 <- 이것도 아님

npm init 
이 명령어가 먼저 실행되어야 함
프로젝트관련 내용을 다 기술하면 되는 것 같은데 그냥 엔터해도 기본 설정이 됨

해당 파일들이 다 받아졌음
 
 */


var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(uc.upperCase("Hello World!")); //대문자로 변환됨
    res.end();
}).listen(8080);