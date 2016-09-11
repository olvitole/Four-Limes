var router = require('express').Router();
var jwt = require('jsonwebtoken');
var secret = require('../config/tokens').secret;
var usersController = require('../controllers/users');
var authController = require('../controllers/authentications');
var ordersController = require('../controllers/ordersController');
var productsController = require('../controllers/productsController');

function secureRoute(req, res, next) {
  if(!req.headers.authorization) 
    return res.status(401).json({ message: "Unauthorized" });

  var token = req.headers.authorization.replace('Bearer ', '');
  jwt.verify(token, secret, function(err, payload) {
    if(err || !payload) 
      return res.status(401).json( { message: "Unauthorized" });

    req.user = payload;
    next();
  });
}

router.route('/product')
  .all(secureRoute)
  .get(productsController.index)
  .post(productsController.create);

router.route('/product/:id')
  .all(secureRoute)
  .get(productsController.show)
  .put(productsController.update)
  .patch(productsController.update)
  .delete(productsController.delete);

router.route('/orders')
  //.all(secureRoute)         COMMENTED OUT FOR TESTING
  .get(ordersController.index)
  .post(ordersController.create);

router.route('/users')
  .all(secureRoute)
  .get(usersController.index)
  .post(usersController.create);

router.route('/users/:id')
  .all(secureRoute)
  .get(usersController.show)
  .put(usersController.update)
  .patch(usersController.update)
  .delete(usersController.delete);

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;