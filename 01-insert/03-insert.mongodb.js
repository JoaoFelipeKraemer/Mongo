use('school');
db.inventory.insertOne({
    item: 'jornal',
    quantidade: 25,
    tamanho: {
        h: 22,
        l: 34,
        unodade: 'cm'
    },
    status: "A"
})
use('school');
db.inventory.insertOne({
    item: 'borracha',
    quantidade: 125,
    tamanho: {
        h: 4,
        l: 3,
        unodade: 'cm'
    },
    status: "D"
})



db.inventory.insertMany([{
    item: 'revista',
    quantidade: 15,
    tamanho: {
        h: 15,
        l: 15,
        unodade: 'cm'
    },
    status: "A"
},
{
    item: 'papel',
    quantidade: 10,
    tamanho: {
        h: 12,
        l: 22,
        unodade: 'cm'
    },
    status: "A"
}]

)