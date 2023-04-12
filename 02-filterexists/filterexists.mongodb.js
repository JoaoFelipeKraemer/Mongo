// { campo: { $exists: <boolean> } }

// Quando o <boolean> é verdadeiro (true), o operador $exists encontra os documentos 
// que contêm o atributo, incluindo os documentos em que o valor do atributo é igual 
// a null. Se o <boolean> é falso (false), a consulta retorna somente os documentos que
// não contêm o atributo.

use('school');
db.inventory.find({ quantidade: { $exists: true } })
// Essa consulta retorna todos os documentos 
// da coleção inventory em que o atributo quantidade existe.


use('school');
db.inventory.find({ quantidade: { $exists: true, $nin: [ 5, 15 ] } })

// Essa consulta seleciona todos os documentos da coleção 
// inventory em que o atributo quantidade existe E seu valor é diferente de 5 e 15.
