const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: 'shaoyouqing1213@gmail.com',
        pass: 'dxwskaqigffiirta'
    },
    from: 'shaoyouqing1213@gmail.com'
});

const mailOptions = {
    from: '"Youqing Shao" <shaoyouqing1213@gmail.com>', // sender address
    to: 'yshaots@bu.edu', // list of receivers
    subject: 'Hello, this is tsing, [MYCOMPANY] YOUR EMAIL VERIFICATION', // Subject line
    cc: [],
    // text or html
    // text: "Hello. This email is for your email verification.", // plain text body
    html: '<h1>Hello world, I am test engineer</h1>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    console.log(info);
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});

// get pass: https://www.chenweiliang.com/cwl-27998.html
// refs: https://www.bacancytechnology.com/blog/send-email-using-nodemailer
//https://nodemailer.com/

module.exports = {};
