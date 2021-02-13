/*
 * 
C:\Users\Your Name>npm install nodemailer
 발송은 안되었으나 일단 어떻게 사용하는지는 알았으니 넘어감
*/

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'leedohyun1985@gmail.com',
        pass: ''
    }
});

var mailOptions = {
    from: 'leedohyun1985@gmail.com',
    to: 'leedohyun1985@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});