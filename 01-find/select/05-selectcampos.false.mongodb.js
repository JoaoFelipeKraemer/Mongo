use('school');
db.inventory.find(
    {},
    {item: false, tamanho: false }
    )
//select item,status from inventory
//segundo bloco é projeção c false ou 0
