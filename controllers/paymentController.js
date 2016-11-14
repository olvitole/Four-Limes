var stripe = require('stripe')('sk_test_BQokikJOvBiI2HlWgH4olfQ2');
var ordersController = require('./ordersController');

function makePayment(req, res){
  var token = req.body.token;

  var charge = stripe.charges.create({
    amount: parseInt(parseFloat(req.body.amount * 100), 10),
    currency: 'GBP',
    source: token,
    description: 'TEST'
    // metadata: { "order_id": "123This is will's custom meta" }
  }, function(err, charge){
    if(err) {
      return res.status(500).json({ message: err });
    }
    res.status(200).json({ message: 'Payment Successful' });
    console.log('Payment Successful');
    // console.log("Payment successful on the backend... do something here");
    // console.log("Payment Successful on the backend req", req.body.orderNum);
    var orderNumber = req.body.orderNum;
    ordersController.updateToPaid(orderNumber);

    // console.log("Payment Successful on the backend res", res.body);
  });
}

module.exports = {
  payment: makePayment
};