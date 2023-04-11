// db.colecao.find().sort({ "campo": "1 ou -1"})
// quando existe necessidade de ordenar em crescente = 1 em decrescente = -1

// db.example.find({}, { "value": 1, "name": 1 }).sort({ "value": -1, "name": 1 })


// O sort() só pode ser usado se tiver algum resultado de busca antes:

// db.colecao.find().sort({ nomeDoAtributo: 1 }) // certo
// db.colecao.sort({ nomeDoAtributo: 1 }) // errado
db.example.insertMany([
    { "name": "Mandioquinha Frita", "price": 14 },
    { "name": "Litrão", "price": 8 },
    { "name": "Torresmo", "price": 16 }
])

db.example.find().sort({ "price": 1 }).pretty()

db.example.find().sort({ "price": -1, "name" : 1 }).pretty()