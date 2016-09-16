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
      shortDescription: "The Jazz Apple variety is a cross between the UK’s two biggest selling varieties – the Royal Gala and the Braeburn.",
      longDescription: "Created in New Zealand, the Jazz Apple variety is a cross between the UK’s two biggest selling varieties – the Royal Gala and the Braeburn. Like all good parents, these two varieties passed on their best traits to Jazz. From the Royal Gala, the Jazz Apple gets its deliciously sweet taste and from the Braeburn it inherits its crunchy-licious texture. With such esteemed parentage, it’s no wonder that the Jazz Apple now sits firmly at the top of its tree.",
      quantityAvail: 50,
      packSize: "6 apples",
      onSpecial: false,
      taxRate: 0.00
    }, {
      itemName: "Apples",
      image: "https://assets.riverford.co.uk/live/media/catalog/product/cache/1/image/262x/9df78eab33525d08d6e5fb8d27136e95/a/p/red_apple2.jpg",
      type: "Cox",
      price: 2.19,
      shortDescription: "Cox's flavour is sprightly subacid, with hints of cherry and anise, becoming softer and milder with age.",
      longDescription: "The apples are of medium size, orange-red in colour, deepening to bright red and mottled with carmine over a deep yellow background. The flesh is very aromatic, yellow-white, fine-grained, crisp, and very juicy. Cox's flavour is sprightly subacid, with hints of cherry and anise, becoming softer and milder with age. When ripe apples are shaken, the seeds make a rattling sound as they are only loosely held in the apple's flesh. Cox's Orange Pippin, in Britain often referred to simply as Cox, is an apple cultivar first grown in 1830, at Colnbrook in Buckinghamshire, England, by the retired brewer and horticulturist Richard Cox.",
      quantityAvail: 15,
      packSize: "6 apples",
      onSpecial: false,
      taxRate: 0.00
    }, {
      itemName: "Apples",
      image: "https://assets.riverford.co.uk/live/media/catalog/product/cache/1/image/262x/9df78eab33525d08d6e5fb8d27136e95/a/p/red_apple2.jpg",
      type: "Bramley",
      price: 2.19,
      shortDescription: "Our most popular. Get in quick!",
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
      shortDescription: "Gala apples are sweet, fine textured, and aromatic.",
      longDescription: "Gala apples are vertically striped or mottled, overall orange in colour. Gala apples are sweet, fine textured, and aromatic, and can be added to salads or cooked, and are especially suitable for creating sauces.",
      quantityAvail: 5,
      packSize: "6 apples",
      onSpecial: false,
      taxRate: 0.00
    }, {
      itemName: "Bananas",
      image: "https://assets.riverford.co.uk/live/media/catalog/product/cache/1/image/262x/9df78eab33525d08d6e5fb8d27136e95/f/i/banana.jpg",
      type: "Cavendish",
      price: 0.99,
      shortDescription: "Go bananas!",
      longDescription: "These organic bananas are great! They have the perfect bend and length. We’ve been out to meet the growers ourselves and seen first-hand that everyone gets a fair deal, with good working conditions and pay.",
      quantityAvail: 44,
      packSize: "6 apples",
      onSpecial: false,
      taxRate: 0.00
    }, {
      itemName: "Pineapple",
      image: "https://assets.riverford.co.uk/live/media/catalog/product/cache/1/image/262x/9df78eab33525d08d6e5fb8d27136e95/f/i/pineapple.jpg",
      type: "Natal Queen",
      price: 0.99,
      shortDescription: "These Pineapples can be consumed fresh, cooked, juiced, or preserved.",
      longDescription: "These Pineapples can be consumed fresh, cooked, juiced, or preserved. The Natal Queen Pineapple is perhaps the sweetest type of Pineapple. The Natal Queen Pineapple has a deep yellow-orange flesh.",
      quantityAvail: 14,
      packSize: "1",
      onSpecial: false,
      taxRate: 0.00
    }, {
      itemName: "Raspberries",
      image: "https://assets.riverford.co.uk/live/media/catalog/product/cache/1/image/262x/9df78eab33525d08d6e5fb8d27136e95/f/i/raspberriese.jpg",
      type: "Cowichan",
      price: 1.99,
      shortDescription: "Perfecct, juicy raspberries.",
      longDescription: "Our raspberries are so delicious it’s almost criminal to do too much to them. Pile atop a cream-capped meringue or simply pluck them from straight from the box. We know when summer is in our midst when we take delivery of English Raspberries. These beauties come from Tim's farm in Herefordshire. Most people grow their raspberries in pollytunnels, but not our Tim. He only grows them outside, so they get plenty of direct sunlight and grow and ripen slowly. It makes for particularly delicious fruit.",
      quantityAvail: 20,
      packSize: "150g",
      onSpecial: false,
      taxRate: 0.00
    }, {
      itemName: "Lemons",
      image: "https://assets.riverford.co.uk/live/media/catalog/product/cache/1/image/262x/9df78eab33525d08d6e5fb8d27136e95/f/i/lemons.jpg",
      type: "Meyer",
      price: 1.39,
      shortDescription: "Perfect for squeezing into a G&T",
      longDescription: "Lemons need cool nights to get their yellow skin, so at this time of the year these European lovelies are naturally more green. Perfect for squeezing into a variety of dishes or even added to a nice glass of G&T, our organic lemons are bursting with juice and flavour.",
      quantityAvail: 20,
      packSize: "350g bag",
      onSpecial: false,
      taxRate: 0.00
    }, {
      itemName: "Limes",
      image: "https://assets.riverford.co.uk/live/media/catalog/product/cache/1/image/262x/9df78eab33525d08d6e5fb8d27136e95/f/i/limes.jpg",
      type: "Key",
      price: 1.49,
      shortDescription: "One bag = one Key Lime Pie :)",
      longDescription: "Limes can be a little yellow. Don't be put off this is natural the limes will still be perfectly ripe inside. Use the Juice in 100's of ways. Add some zing to your cooking with these liems.",
      quantityAvail: 25,
      packSize: "450g bag",
      onSpecial: false,
      taxRate: 0.00
    }

    ], function(err, product) {
    // console.log(users.length + " users created!");
    // console.log(product.length + " products added. Yeah!");

    mongoose.connection.close();
  });
})