
function makePayment(req, res){
  var token = req.body.token;  // Needed?

  var charge = stripe.charges.create({
    amount: parseInt(parseFloat(req.body.amount * 100), 10),
    currency: 'GBP',
    source: token,
    decription: "TEST"
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