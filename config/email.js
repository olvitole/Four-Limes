var Promise = require('bluebird');
var nodemailer = require('nodemailer');
var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.GMAIL_ID,
      pass: process.env.GMAIL_PASSWORD,
    }
};

var transporter = nodemailer.createTransport(smtpConfig);

module.exports = {
  sendMail: function(mailOptions) {

    return new Promise(function(resolve, reject) {

      transporter.sendMail(mailOptions, function(err, info) {
        if(err) return reject(err);
        return resolve(info);
      });

    });
  }
}