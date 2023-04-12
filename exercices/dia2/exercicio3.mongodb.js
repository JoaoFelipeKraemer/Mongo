db.example.find().sort({ "price": 1 }).pretty()

db.example.find().sort({ "price": -1, "name" : 1 }).pretty()

use('business');
db.restaurants.find().sort({'name': 1})

use('business');
db.restaurants.find().sort({'rating': -1})