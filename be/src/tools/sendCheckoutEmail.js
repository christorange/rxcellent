const nodemailer = require('nodemailer');

const sendCheckoutEmail = (params) => {
    const addr = params.props.address;
    const items = params.props.items;
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

    let itemStr = '<ul>';
    items.forEach((item) => {
        itemStr += `<li>'${item.title}     Qty: ${item.quantity}</li>`;
    });
    itemStr += '</ul>';

    const htmlOutput = `
        <html>
            <head>
                <title>Rxcellent Delivery</title>
            </head>
            <body>
                <h1>Hi ${addr.name}! Your Rxcellent order is being processed!</h1>
                <p>Delivery Address: ${addr.street} ${addr.city} ${addr.zip}</p>
                <p>Your items</p>${itemStr}
                <p>Subtotal: $${params.amounts[0]}</p>
                <p>Tax: $${params.amounts[1]}</p>
                <p>Shipping: $${params.amounts[2]}</p>
                <h2>TOTAL: $${params.amounts[3]}</h2>
            </body>
        </html>
        `;

    const mailOptions = {
        from: '"Youqing Shao" <shaoyouqing1213@gmail.com>', // sender address
        to: addr.email,
        subject: 'Rxcellent: About your order',
        html: htmlOutput
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

module.exports = { sendCheckoutEmail };
