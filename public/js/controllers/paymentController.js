//Payment Controller

angular
  .module("AngularApp")
  .controller('PaymentController', PaymentController);

PaymentController.$inject = ['$http', 'API_URL', "Order", "User", "$rootScope", "$state"];
function PaymentController($http, API_URL, Order, User, $rootScope, $state) {
  var self = this;

  self.card = {};
  self.payee = null;
  self.currency = "gbp";
  self.paymentSuccessful = false;
  self.grandTotal;
  self.orderId;

  $rootScope.$on('order received', function(event, data) {
    //console.log("Payment Controller Order was made: ", data);
    self.grandTotal = data.grandTotal;
    self.orderId = data._id;
  });

  self.pay = function() {
    Stripe.card.createToken(self.card, function(status, response) {
      var data = {
        card: self.card,
        token: response.id,
        amount: self.grandTotal,
        currency: self.currency,
        payee: self.payee
      };
    
      $http
        .post(API_URL + '/payment', data)
        .then(function(res) {
          // if(res.status === 200) {
          if(res.status === 200) {
            self.paymentSuccessful = true;
            console.log("paymentSuccessful");
            console.log("OrderId: ", self.orderId);
            self.updateOrder();
            self.success();
          }
          else {
            self.paymentSuccessful = false;
            console.log("paymentUnSuccessful");
            console.log("Order was NOT updated to 'PAID'");
          }
        });

    });
  }

  self.updateOrder = function(){
    var updatedData = {
      isPaid: true
    };

    $http
      .patch(API_URL + '/orders/' + self.orderId, updatedData)
      .then(function(res){
        if(res.status === 200) {
          console.log("Order was updated to 'PAID'");
        } else {
          console.log("Order was NOT updated to 'PAID'");
        }
      });
  }

  self.success = function() {
    $rootScope.$broadcast("paymentSuccessful");
  }

  self.reset = function() {
    self.card = {};
    self.payee = "";
    self.amount = null;
    self.paymentSuccessful = false;
    self.Form.$setPristine(true);
    // use vanilla JS to reset form to remove browser's native autocomplete highlighting
    document.getElementsByTagName('form')[0].reset();
  }

  self.amount = function() {
    this.selected = Order.get( $state.params );
    console.log(Order);
  }  
}