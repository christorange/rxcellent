const nodemailer = require('nodemailer');

function sendPrescriptionEmail(patientEmail, prescriptionNumber) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.eu',
        // service: "Zoho",
        port: 465,
        secure: true, //ssl
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
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
        from: `Rxcellent <${process.env.EMAIL_USERNAME}>`,
        to: patientEmail,
        subject: "Welcome to Rxcellent, here's your Prescription Number",
        html: htmlOutput
    };

    console.log('One: ', patientEmail);
    console.log('Two: ', prescriptionNumber);
    console.log('Three: ', mailOptions);

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = { sendPrescriptionEmail };
