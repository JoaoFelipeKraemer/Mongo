use('school');
db.inventory.find(
    {},
    {item: true, _id: false}
    )
//select item,status from inventory
//segundo bloco é projeção c true ou 1
