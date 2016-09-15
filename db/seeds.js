var mongoose = require('mongoose');
var User = require('../models/user');
var Product = require('../models/product');

var databaseUri = require('../config/db')(process.env.NODE_ENV || 'development');
mongoose.connect(databaseUri);

User.collection.drop();
Product.collection.drop();

User.create([
  {
    firstName: "Micky",
    lastName: "Ginger",
    email: "mike.hayden@ga.co",
    password: "password",
    passwordConfirmation: "password",
    buildingNumber: "1",
    addressLine1: "The Relay Building",
    addressLine2: "Commercial Street",
    addressLine3: "London" ,
    postCode: "E1 7PT",
    contactPh: "020 3308 9506",
    isAdmin: false
  },{
    firstName: "Roro",
    lastName: "Rossington",
    email: "rosanna.rossington@ga.co",
    password: "password",
    passwordConfirmation: "password",
    buildingNumber: "1",
    addressLine1: "The Relay Building",
    addressLine2: "Commercial Street",
    addressLine3: "London" ,
    postCode: "E1 7PT",
    contactPh: "020 3308 9506",
    isAdmin: false
  },{
    firstName: "Chanse",
    lastName: "Campbell",
    email: "chanse.campbell@ga.co",
    password: "password",
    passwordConfirmation: "password",
    buildingNumber: "1",
    addressLine1: "The Relay Building",
    addressLine2: "Commercial Street",
    addressLine3: "London" ,
    postCode: "E1 7PT",
    contactPh: "020 3308 9506",
    isAdmin: false
  },{
    firstName: "Will",
    email: process.env.GMAIL_WILL,
    password: "password",
    passwordConfirmation: "password",
    buildingNumber: "1",
    addressLine1: "The Relay Building",
    addressLine2: "Commercial Street",
    addressLine3: "London" ,
    postCode: "E1 7PT",
    contactPh: "020 3308 9506",
    isAdmin: true
  }
], function(err, users) {
  Product.create([
    {
      itemName: "Apples",
      image: "https://assets.riverford.co.uk/live/media/catalog/product/cache/1/image/262x/9df78eab33525d08d6e5fb8d27136e95/a/p/red_apple.jpg",
      type: "Jazz",
      price: 1.39,
      shortDescription: "Short description goes here...",
      longDescription: "The most popular of all English cooking apples with an acidic yet fragrant apple flavour. The UK is the only country which grows apples specially designed for cooking – Bramley gives a moist, airy 'melt in the mouth' texture.",
      quantityAvail: 50,
      packSize: "6 apples",
      onSpecial: false,
      taxRate: 0.00
    }, {
      itemName: "Apples",
      image: "https://assets.riverford.co.uk/live/media/catalog/product/cache/1/image/262x/9df78eab33525d08d6e5fb8d27136e95/a/p/red_apple2.jpg",
      type: "Cox",
      price: 2.19,
      shortDescription: "Short description goes here...",
      longDescription: "The most popular of all English cooking apples with an acidic yet fragrant apple flavour. The UK is the only country which grows apples specially designed for cooking – Bramley gives a moist, airy 'melt in the mouth' texture.",
      quantityAvail: 15,
      packSize: "6 apples",
      onSpecial: false,
      taxRate: 0.00
    }, {
      itemName: "Apples",
      image: "https://assets.riverford.co.uk/live/media/catalog/product/cache/1/image/262x/9df78eab33525d08d6e5fb8d27136e95/a/p/red_apple2.jpg",
      type: "Bramley",
      price: 2.19,
      shortDescription: "Short description goes here...",
      longDescription: "The most popular of all English cooking apples with an acidic yet fragrant apple flavour. The UK is the only country which grows apples specially designed for cooking – Bramley gives a moist, airy 'melt in the mouth' texture.",
      quantityAvail: 10,
      packSize: "8 apples",
      onSpecial: false,
      taxRate: 0.00
    }, {
      itemName: "Apples",
      image: "https://assets.riverford.co.uk/live/media/catalog/product/cache/1/image/262x/9df78eab33525d08d6e5fb8d27136e95/a/p/red_apple.jpg",
      type: "Gala",
      price: 2.19,
      shortDescription: "Short description goes here...",
      longDescription: "The most popular of all English cooking apples with an acidic yet fragrant apple flavour. The UK is the only country which grows apples specially designed for cooking – Bramley gives a moist, airy 'melt in the mouth' texture.",
      quantityAvail: 5,
      packSize: "6 apples",
      onSpecial: false,
      taxRate: 0.00
    }, {
      itemName: "Bananas",
      image: "https://assets.riverford.co.uk/live/media/catalog/product/cache/1/image/262x/9df78eab33525d08d6e5fb8d27136e95/f/i/banana.jpg",
      type: "Cavendish",
      price: 0.99,
      shortDescription: "Short description goes here...",
      longDescription: "These organic bananas are great! They have the perfect bend and length. We’ve been out to meet the growers ourselves and seen first-hand that everyone gets a fair deal, with good working conditions and pay.",
      quantityAvail: 44,
      packSize: "6 apples",
      onSpecial: false,
      taxRate: 0.00
    },
      ], function(err, product) {
    // console.log(users.length + " users created!");
    // console.log(product.length + " products added. Yeah!");

    mongoose.connection.close();
  });
})