var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
    //open �� �ι�° �Ű����� flag�� �����µ� writing �̶�� �ǹ̷� w�� ����. �̷��� ������ ������ �� ������ �����ȴ�.
    if (err) throw err;
    console.log('Saved!');
});