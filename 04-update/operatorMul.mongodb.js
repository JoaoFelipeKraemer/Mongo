// Operador $mul
// O operador $mul multiplica o valor de um campo por um número especificado, persistindo
// o resultado dessa operação sem a necessidade do operador $set.

//  Considere a coleção products com o novo documento descrito abaixo:
use('conteudo_trybe');
db.products.insertOne(
    { "_id": 1, "item": "ABC", "price": NumberDecimal("10.99"), "qty": 25 }
  );


use('conteudo_trybe');
db.products.find({_id: 1})  

// A query abaixo altera esse documento, utilizando o operador $mul
//  para multiplicar os valores dos campos price e qty:

db.products.updateOne(
    { _id: 1 },
    { $mul: { price: NumberDecimal("1.25"), qty: 2 } }
  );


  use('conteudo_trybe');
  db.products.find({_id: 1})  

//   Você pode utilizar o $mul em um campo que não exista no documento. Nesse caso, 
//   o operador criará o campo e será atribuído a ele o valor zero do mesmo tipo numérico do multiplicador.
use('conteudo_trybe');
db.products.insertOne(
    { _id: 2, item: "Unknown" }
  );
  use('conteudo_trybe');
  db.products.updateOne(
    { _id: 2 },
    { $mul: { price: NumberLong("100") } }
  );  


  use('conteudo_trybe');
  db.products.find()  

  use('conteudo_trybe');
db.products.insertOne(
  { _id: 3,  item: "XYZ", price: NumberLong("10") }
);

use('conteudo_trybe');
db.products.find()  

// A query abaixo faz um update, multiplicando o valor do campo price, que é 
// do tipo NumberLong("10"), por NumberInt(5):



use('conteudo_trybe');
db.products.updateOne(
    { _id: 3 },
    { $mul: { price: NumberInt(5) } }
  );

 
  use('conteudo_trybe');
  db.products.find()  
 