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

var invoiceTemplate = transporter.templateSender({
  subject: '{{firstName }}, FourLimes Thanks You!',
  text: 'This is the text version{{ order_id }}',
  html: "<head><style>body{background-color: #9ACD32}h1{color: white}</style></head><body><h1>Four*Limes</h1><br><h3>Hi {{firstName}}, thanks for your order.</h3><h3>Your order number is {{ order_id }}</h3><p>In case you need a reminder, the details for your order are: </p><p> Date ordered: {{ date }}</p><p>Contact Person for delivery: {{ firstName }} {{ lastName }}</p><p>Delivery Address:</p><p>{{ buildingNumber }} {{ addressLine1 }}</p><p>{{ addressLine3 }}</p><p>{{ postcode }}</p><p>Contact Person's Phone Number: {{ contact_ph }}</p><p> Order total: £{{ grandTotal }}</p><p>Steve, your delivery driver, will be in touch in the next business day to personally organise delivery with you.</p><h5>If you have any issues or you havn't heard from Steve, then call us on 07508 727482 or drop us a line at care@fourlimes.co.uk</h5><br><br><p>FourLimes ltd - London, UK</p></body>"
}, { from: process.env.GMAIL_ID });
  function sendInvoiceTemplate(order) {
//function sendInvoiceTemplate(email, date_in, inorder_id, firstName_in, lastName_in, buildingNumber_in, addressLine1_in, addressLine2_in, addressLine3_in, postcode_in, contact_ph_in, grandTotal_in) {
 
  email = order.user.email;
  date_in = order.createdAt;
  if(date_in == undefined){date_in = ""};
  inorder_id = order._id;
  if(inorder_id == undefined){inorder_id = ""};
  firstName_in = order.user.firstName;
  if(firstName_in == undefined){firstName_in = ""};
  lastName_in = order.user.lastName;
  if(lastName_in  == undefined){lastName_in = ""};
  buildingNumber_in = order.user.buildingNumber;
  if(buildingNumber_in == undefined){buildingNumber_in = ""};
  addressLine1_in = order.user.addressLine1;
  if(addressLine1_in == undefined){addressLine1_in = ""};
  addressLine2_in = order.user.addressLine2;
  if(addressLine2_in == undefined){addressLine2_in = ""};
  addressLine3_in = order.user.addressLine3;
  if(addressLine3_in == undefined){addressLine3_in = ""};
  postcode_in = order.user.postCode;
  if(postcode_in == undefined){postcode_in = ""};
  contact_ph_in = order.user.contactPh;
  if(contact_ph_in == undefined){contact_ph_in = ""};
  grandTotal_in = order.grandTotal;
  // console.log("before the if", grandTotal_in);
  if(grandTotal_in == undefined){grandTotal_in = ""};
  // console.log("after the if", grandTotal_in);

  invoiceTemplate({
      to: email
  }, {
      order_id: inorder_id,
      date: date_in,
      firstName: firstName_in,
      lastName: lastName_in,
      buildingNumber: buildingNumber_in,
      addressLine1: addressLine1_in,
      addressLine2: addressLine2_in,
      addressLine3: addressLine3_in,
      postcode: postcode_in,
      contact_ph: contact_ph_in,
      contact_email: email,
      grandTotal: grandTotal_in

  }, function(err, info){
      if(err){
         console.log('Error', err);
      }else{
          console.log('Yeah, email sent!');
      }
  });
}

module.exports = {
  sendMail: function(mailOptions) {

    return new Promise(function(resolve, reject) {

      transporter.sendMail(mailOptions, function(err, info) {
        if(err) return reject(err);
        return resolve(info);
      });

    });
  },
  sendInvoiceTemplate: sendInvoiceTemplate
}