var fs = require('fs');

//create a file named mynewfile1.txt: 
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    // Hello content!라고 작성된mynewfile1.txt 파일이 생성됨 appendFile 파일이 생성되어 있지 않으면 만들어줌
    if (err) throw err;
    console.log('Saved!');
});