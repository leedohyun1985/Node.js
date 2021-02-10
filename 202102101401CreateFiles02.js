var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
    //open 은 두번째 매개변수 flag를 가지는데 writing 이라는 의미로 w를 쓴다. 이러면 파일이 없으면 빈 파일이 생성된다.
    if (err) throw err;
    console.log('Saved!');
});