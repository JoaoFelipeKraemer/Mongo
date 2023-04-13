// Alterando um único documento
// Para alterar um único documento, você pode utilizar o método updateOne(). 
// Como o nome do método diz, ele altera apenas o primeiro documento que satisfaça o critério de filtro.


use('conteudo_trybe');
db.inventory.insertMany([
{ "item": "journal", "qty": 25, "size": { "h": 14, "w": 21, "uom": "cm" }, "status": "A" },
{ "item": "notebook", "qty": 50, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status": "A" },
{ "item": "paper", "qty": 100, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status": "D" },
{ "item": "planner", "qty": 75, "size": { "h": 22.85, "w": 30, "uom": "cm" }, "status": "D" },
{ "item": "postcard", "qty": 45, "size": { "h": 10, "w": 15.25, "uom": "cm" }, "status": "A" }
]);

use('conteudo_trybe');
db.inventory.updateOne(
    { item: "paper" },
    { $set: { "size.uom": "cm", status: "P" } }
  );

//   Note que dois parâmetros foram passados no método:

//   O primeiro deles é o filtro. Nesse caso, um filtro simples de igualdade, mas outros
//    operadores podem ser utilizados aqui;
  
//   O segundo é a operação de update em si. Nesse caso, foi utilizado o operador de atualização
//    $set para alterar o valor do campo size.uom para cm e o valor do campo status para P.

// Chamando o método db.colecao.updateOne() com o parâmetro de filtro vazio { }, o 
// resultado é a atualização do primeiro documento presente em colecao.