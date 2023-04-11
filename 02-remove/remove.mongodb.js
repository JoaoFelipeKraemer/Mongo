// Para remover documentos de uma coleção temos dois métodos que são
//  utilizados para níveis de remoção diferentes: o deleteOne() e o deleteMany().
//   Os dois métodos aceitam um documento como parâmetro, que pode conter um filtro
//    simples ou até mesmo um conjunto de expressões para atender aos critérios de seleção.

// deleteOne()
// Esse método remove apenas um documento, que deve satisfazer o critério de seleção,
//  mesmo que muitos outros documentos também se enquadrem no critério de seleção. 
//  Se nenhum valor for passado como parâmetro, a operação removerá o primeiro documento da coleção.

// O exemplo abaixo remove o primeiro documento da coleção inventory em que o atributo status é igual a D:

use('school');
db.inventory.deleteOne({ status: "A" })

// deleteMany()
// Esse método remove todos os documentos que satisfaçam o critério de seleção.

// O exemplo abaixo remove todos os documentos da coleção inventory em que o atributo status é igual a A:

db.inventory.deleteMany({ status : "A" })

// Para remover todos os documentos da coleção, basta não passar nenhum parâmetro para o método deleteMany():
db.inventory.deleteMany({})