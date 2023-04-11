use('school');
db.inventory.find({
    status: 'B'
}).limit(2);

//select * form inventory limit 2