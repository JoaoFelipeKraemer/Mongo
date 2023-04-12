// Assim como os operadores de comparação, os operadores lógicos
//  também podem ser utilizados nos mesmos métodos para leitura 
//  e atualização de documentos do MongoDB. Eles ajudam a elaborar 
//  consultas mais complexas, contendo cláusulas para retornar documentos
//   que satisfaçam os filtros.

// { campo: { $not: { <operador ou expressão> } } }

use('school');
db.inventory.find({ price: { $not: { $gt: 1.99 } } })

// Essa consulta seleciona todos os documentos na coleção inventory em que o 
// valor do atributo price é menor ou igual a 1.99 (em outras palavras, não é maior que 1.99), 
// ou em que o atributo price não existe.

// IMPORTANTE: a expressão { $not: { $gt: 1.99 } } retorna um resultado diferente do 
// operador $lte. Ao utilizar { $lte: 1.99 }, os documentos retornados serão somente 
// aqueles em que o campo price existe e cujo valor é menor ou igual a 1.99.

////////////////////////////////////

// O operador $or executa a operação lógica OU em um array de uma ou mais 
// expressões e seleciona os documentos 
// que satisfaçam ao menos uma das expressões.
use('school');
db.inventory.find({ $or: [{ quantidade: { $lt: 20 } }, { price: 10 }] })


// Essa consulta seleciona todos os documentos da coleção inventory em que o valor do atributo qty é menor 
// do que 20 ou o valor do atributo price é igual a 10.

///////////////////////////////

// O operador $nor também executa uma operação lógica de NEGAÇÃO, porém, em um array de uma ou mais
//  expressões, e seleciona os documentos em que todas essas expressões 
//  falhem, ou seja, seleciona os documentos em que todas as expressões desse array sejam falsas.
use('school');
db.inventory.find({ $nor: [{ quantidade: 15 }, { sale: true }] })

// Essa query retorna todos os documentos da coleção inventory que:

// q contem quantidade diferente de 15 e o atributo sale com o valor diferente de true;

// Ou contêm o atributo quantidade com valor diferente de15 e não contêm o atributo sale;

// Ou não contêm o atributo quantidade e contêm o atributo sale com valor diferente de true;

// Ou não contêm o atributo quantidade e nem o atributo sale.

///////////////////////


// O operador $and executa a operação lógica E num array de uma ou mais expressões e seleciona os
//  documentos que satisfaçam todas as expressões no array. O operador $and usa o 
//  que chamamos de avaliação em curto-circuito (short-circuit evaluation). 
//  Se alguma expressão for avaliada como falsa, o MongoDB não avaliará as expressões restantes, 
//  pois o resultado final sempre será falso independentemente do resultado delas.

// Múltiplas expressões especificando o mesmo atributo
use('school');
db.inventory.find({
    $and: [
        { quantidade: { $ne: 25 } },
        { quantidade: { $exists: true } }
    ]
})

// Essa consulta seleciona todos os documentos da coleção inventory em que
//  o valor do atributo quantidade é diferente de 25 e o atributo quantidade existe.


// Múltiplas expressões especificando o mesmo operador
use('school');
db.inventory.find({
    $and: [
        { quantidade: { $gt:10, $lt: 26 } },
        {
            $or: [
                { status : true },
                {  status : {$eq:'A'} }
            ]
        }
    ]
})

// Essa consulta seleciona todos os documentos da coleção
//  inventory em que o valor do campo quantiadde é maior que 10 e menor que 26, 
//  E o valor do atributo status é igual a true, OU o valor do atributo status é igual a 'A'. 
//  Ou seja, essa expressão é equivalente a (quantiadde > 0.99 E quantiadde < 1.99)
//   (onde o E está implícito na vírgula aqui { $gt: 0.99, $lt: 1.99 }) E (status = true OU status = 'A').

// db.inventory.find({
//     $and: [
//         { price: { $gt: 0.99, $lt: 1.99 } },
//         {
//             $or: [
//                 { sale : true },
//                 { qty : { $lt : 20 } }
//             ]
//         }
//     ]
// })