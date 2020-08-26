require('dotenv').config();

const nodemailer = require('nodemailer');


// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});


// Step 2
let mailOptions = {
    from: 'pupken111@gmail.com',
    to: '6699393@gmail.com',
    subject: 'Testing and testing',
    text: 'It works'
};


// Step 3
transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
        console.log('Error Occurs', err);
    } else {
        console.log('Email sent');
    }
});