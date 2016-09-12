var mongoose = require('mongoose');
var User = require('../models/user');
var Product = require('../models/product');

var databaseUri = require('../config/db')('development');
mongoose.connect(databaseUri);

User.collection.drop();
Product.collection.drop();

User.create([
  {
    firstName: "mickyginger",
    email: "mike.hayden@ga.co",
    password: "password",
    passwordConfirmation: "password",
    isAdmin: false
  },{
    firstName: "roro",
    email: "rosanna.rossington@ga.co",
    password: "password",
    passwordConfirmation: "password",
    isAdmin: false
  },{
    firstName: "chansec",
    email: "chanse.campbell@ga.co",
    password: "password",
    passwordConfirmation: "password",
    isAdmin: false
  },{
    firstName: "will",
    email: process.env.GMAIL_WILL,
    password: "password",
    passwordConfirmation: "password",
    isAdmin: true
  }
], function(err, users) {
  Product.create([
    {
      itemName: "Apples",
      image: "https://assets.riverford.co.uk/live/media/catalog/product/cache/1/image/262x/9df78eab33525d08d6e5fb8d27136e95/a/p/apples-cooking262.jpg",
      type: "Jazz",
      price: 1.39,
      shortDescription: "Short description goes here...",
      longDescription: "The most popular of all English cooking apples with an acidic yet fragrant apple flavour. The UK is the only country which grows apples specially designed for cooking – Bramley gives a moist, airy 'melt in the mouth' texture.",
      quantityAvail: 50,
      packSize: "6 apples",
      onSpecial: false,
      taxRate: 0
    }, {
      itemName: "Apples",
      image: "https://assets.riverford.co.uk/live/media/catalog/product/cache/1/image/262x/9df78eab33525d08d6e5fb8d27136e95/a/p/apples-cooking262.jpg",
      type: "Cox",
      price: 2.19,
      shortDescription: "Short description goes here...",
      longDescription: "The most popular of all English cooking apples with an acidic yet fragrant apple flavour. The UK is the only country which grows apples specially designed for cooking – Bramley gives a moist, airy 'melt in the mouth' texture.",
      quantityAvail: 15,
      packSize: "6 apples",
      onSpecial: false,
      taxRate: 0
    }, {
      itemName: "Apples",
      image: "https://assets.riverford.co.uk/live/media/catalog/product/cache/1/image/262x/9df78eab33525d08d6e5fb8d27136e95/a/p/apples-cooking262.jpg",
      type: "Bramley",
      price: 2.19,
      shortDescription: "Short description goes here...",
      longDescription: "The most popular of all English cooking apples with an acidic yet fragrant apple flavour. The UK is the only country which grows apples specially designed for cooking – Bramley gives a moist, airy 'melt in the mouth' texture.",
      quantityAvail: 10,
      packSize: "8 apples",
      onSpecial: false,
      taxRate: 0
    }, {
      itemName: "Apples",
      image: "https://assets.riverford.co.uk/live/media/catalog/product/cache/1/image/262x/9df78eab33525d08d6e5fb8d27136e95/a/p/apples-cooking262.jpg",
      type: "Gala",
      price: 2.19,
      shortDescription: "Short description goes here...",
      longDescription: "The most popular of all English cooking apples with an acidic yet fragrant apple flavour. The UK is the only country which grows apples specially designed for cooking – Bramley gives a moist, airy 'melt in the mouth' texture.",
      quantityAvail: 5,
      packSize: "6 apples",
      onSpecial: false,
      taxRate: 0
    }, {
      itemName: "Bananas",
      image: "https://assets.riverford.co.uk/live/media/catalog/product/cache/1/image/262x/9df78eab33525d08d6e5fb8d27136e95/f/i/finbanbag1500.jpg",
      type: "Cavendish",
      price: 0.99,
      shortDescription: "Short description goes here...",
      longDescription: "These organic bananas are great! They have the perfect bend and length. We’ve been out to meet the growers ourselves and seen first-hand that everyone gets a fair deal, with good working conditions and pay.",
      quantityAvail: 44,
      packSize: "6 apples",
      onSpecial: false,
      taxRate: 0
    },
      ], function(err, fruit, product) {
    console.log(users.length + " users created!");
    // console.log(products.length + " products added. Yum!");

    mongoose.connection.close();
  });
})