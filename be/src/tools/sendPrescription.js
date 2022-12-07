const nodemailer = require('nodemailer');

function sendPrescriptionEmail(patientEmail, prescriptionNumber) {
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

    const htmlOutput = `
        <html>
            <head>
                <title>Welcome to Rxcellent!</title>
            </head>
            <body>
                <h1>Welcome to Rxcellent</h1>
                <h2>Here's your Prescription Number</h2>
                <p>Make sure you keep it safe and on hand at all times!</p>
                <h3>Your prescription number is ${prescriptionNumber}</h3>
            </body>
        </html>
        `;

    const mailOptions = {
        from: '"Youqing Shao" <shaoyouqing1213@gmail.com>', // sender address
        to: patientEmail,
        subject: "Welcome to Rxcellent, here's your Prescription Number",
        html: htmlOutput
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = { sendPrescriptionEmail };
