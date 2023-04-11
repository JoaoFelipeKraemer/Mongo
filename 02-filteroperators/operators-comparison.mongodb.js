use('school');
db.inventory.find({ quantidade: { $lt: 20 } })

// O operador $lt seleciona os documentos em que o 
// valor do atributo filtrado é menor do que (<) o valor especificado.
use('school');
db.inventory.find({ quantidade: { $lte: 20 } })

// O operador $lte seleciona os documentos em que o valor do atributo filtrado
//  é menor ou igual (<=) ao valor especificado.
use('school');
db.inventory.find({ quantidade: { $gt: 20 } })

// O operador $gt seleciona os documentos em que o valor do atributo
// filtrado é maior do que (>) o valor especificado.
use('school');
db.inventory.find({ quantidade: { $gte: 20 } })

// O operador $gte seleciona os documentos em que o valor do atributo filtrado
//  é maior ou igual (>=) ao valor especificado.
use('school');
db.inventory.find({ quantidade: {$eq: 25}})

// ou
use('school');
db.inventory.find({ quantidade: 25 })

// O operador $eq seleciona os documentos em que o valor do atributo
//  filtrado é igual ao valor especificado. Esse operador é equivalente ao
//   filtro { campo: <valor> } e não tem nenhuma diferença de performance.
use('school');
db.inventory.find({ quantidade: { $ne: 25 } })
// Esse operador é o contrário do anterior. Ao utilizar o $ne, 
// o MongoDB seleciona os documentos em que o valor do atributo 
// filtrado não é igual ao valor especificado.

use('school');
db.inventory.find({ quantidade: { $in: [ 25, 15 ] } } )
// O operador $in seleciona os documentos em que o valor do atributo é igual a um dos 
// valores do array. Embora você também possa executar essa consulta utilizando 
// o operador $or, que você verá mais à frente no conteúdo, escolha o operador 
// $in para executar comparações de igualdade com mais de um valor no mesmo atributo.

use('school');
db.inventory.find({ quantidade: { $nin: [ 25, 15 ] } } )
// O operador $nin seleciona os documentos em que o valor do atributo filtrado não 
// é igual ao especificado no array, ou o campo não existe.
// Essa consulta seleciona todos os documentos da coleção inventory em que o valor do atributo 
// quantidade é diferente de 5 e 15. Esse resultado também inclui os documentos em que 
// o atributo quantidade não existe.

