use('class');
db.users.insertOne({
    _id: 'and_gross',
    nome: 'andre gross',
    addresses: [{
        street: 'Rua vamoooos',
        city: 'gravatái'
    },
    {
        street: 'sao paulo',
        city: 'paraaue'
    }
]
})
use('class');
db.users.insertOne({
    _id: 'rafgross',
    nome: 'raf gross',
    addresses: [{
        street: 'Rua vamoooos',
        city: 'poa'
    },
    {
        street: 'poa',
        city: 'paraaue'
    }
]
})

//1:N

use('class');
db.users.insertOne({
    _id: 'and_gross',
    nome: 'andre gross',
    addresses: {
        street: 'Rua vamoooos',
        city: 'gravatái'
    },
})

///1:1