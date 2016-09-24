var router = require('express').Router();
var jwt = require('jsonwebtoken');
var secret = require('../config/tokens').secret;
var usersController = require('../controllers/users');
var authController = require('../controllers/authentications');
var ordersController = require('../controllers/ordersController');
var productsController = require('../controllers/productsController');
var paymentController = require('../controllers/paymentController');
var mainCategoriesController = require('../controllers/mainCategoriesController');
var subCategoriesController = require('../controllers/subCategoriesController');
var upload = require('./upload');

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

router.route('/maincategory')
  .get(mainCategoriesController.index)
  .post(mainCategoriesController.create);

router.route('/maincategory/:id')
  .get(mainCategoriesController.show)
  .put(mainCategoriesController.update)
  .patch(mainCategoriesController.update)
  .delete(mainCategoriesController.delete);

router.route('/subcategory')
  .get(subCategoriesController.index)
  .post(subCategoriesController.create);

router.route('/subcategory/:id')
  .get(subCategoriesController.show)
  .put(subCategoriesController.update)
  .patch(subCategoriesController.update)
  .delete(subCategoriesController.delete);

router.route('/payment')
  .post(paymentController.payment);

router.route('/product')
  .all(secureRoute)
  .get(productsController.index)
  .post(upload.single('image'), productsController.create);

router.route('/product/:id')
  .all(secureRoute)
  .get(productsController.show)
  .put(upload.single('image'), productsController.update)
  .patch(upload.single('image'), productsController.update)
  .delete(productsController.delete);

router.route('/orders')
  .all(secureRoute)
  .get(ordersController.index)
  .post(ordersController.create);

router.route('/orders/:id')
  .get(ordersController.show)
  .put(ordersController.update)
  .patch(ordersController.updateToPaid)
  .delete(ordersController.delete);

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
