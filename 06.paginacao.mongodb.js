use('school');
db.inventory.find({}, {item: 1}).count();
use('school');
db.inventory.find({}, {item: 1}).skip(0);
use('school');
db.inventory.find({}, {item: 1}).skip(1*2).limit(2);
// de 2 em 2
use('school');
db.inventory.find({}, {item: 1}).skip(1*3).limit(2);

//skip é tipo offset do mysql