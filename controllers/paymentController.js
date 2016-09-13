var stripe = require('stripe')("sk_test_BQokikJOvBiI2HlWgH4olfQ2");

function makePayment(req, res){
  var token = req.body.token;

  var charge = stripe.charges.create({
    amount: parseInt(parseFloat(req.body.amount * 100), 10),
    currency: 'GBP',
    source: token,
    description: "TEST"
  }, function(err, chrage){
    if(err) {
      return res.status(500).json({ message: err })
    }
    res.status(200).json({ message: "Payment Successful" });
  });
}

module.exports = {
  payment: makePayment
}