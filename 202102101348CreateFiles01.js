var fs = require('fs');

//create a file named mynewfile1.txt: 
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    // Hello content!��� �ۼ���mynewfile1.txt ������ ������ appendFile ������ �����Ǿ� ���� ������ �������
    if (err) throw err;
    console.log('Saved!');
});