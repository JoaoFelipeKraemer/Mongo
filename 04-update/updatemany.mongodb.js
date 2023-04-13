// Alterando múltiplos documentos

// O método db.colecao.updateMany() permite que vários documentos que satisfaçam o critério de 
// filtro sejam alterados de uma única vez.

// No exemplo abaixo, o método db.colecao.updateMany() é utilizado para alterar todos os
//  documentos da coleção inventory em que o valor do campo qty seja menor do que 50:
use('conteudo_trybe');
db.inventory.updateMany(
    { "qty": { $lt: 50 } },
    { $set: { "size.uom": "in", status: "P" } }
  );

//   A operação acima utiliza o operador $set para alterar o valor do campo size.uom para 
//   in e o valor do campo status para P.

// Chamando o método db.colecao.updateMany() com o parâmetro de filtro vazio { }, o resultado
//  é a atualização de todos os documentos presentes em colecao.