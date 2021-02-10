var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    //writeFile은 파일이나 컨텐츠가 존재하면 이를 대체해버린다. 파일이 없으면 새로 컨텐츠를 포함해서 새로 만든다.
    if (err) throw err;
    console.log('Saved!');
});