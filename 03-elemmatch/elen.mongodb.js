// O operador $elemMatch seleciona os documentos que contêm um 
// campo do tipo array com pelo menos um elemento que satisfaça todos
//  os critérios de seleção especificados. Ou seja, com esse operador
//   você pode especificar várias queries para um mesmo array.

// Veja um exemplo considerando a coleção scores com os seguintes documentos:

// { _id: 1, results: [82, 85, 88] },
// { _id: 2, results: [75, 88, 89] }

// A query abaixo seleciona somente os documentos em que o array results contém ao menos um 
// elemento que seja maior ou igual a 80 e menor que 85

db.scores.find(
    { results: { $elemMatch: { $gte: 80, $lt: 85 } } }
  );


// Você pode utilizar o operador $elemMatch em arrays que contenham subdocumentos 
// e especificar vários campos desses subdocumentos como filtro. Veja os seguintes 
// documentos na coleção survey:

// {
//     _id: 1,
//     results: [
//       { product: "abc", score: 10 },
//       { product: "xyz", score: 5 }
//     ]
//   },
//   {
//     _id: 2,
//     results: [
//       { product: "abc", score: 8 },
//       { product: "xyz", score: 7 }
//     ]
//   },
//   {
//     _id: 3,
//     results: [
//       { product: "abc", score: 7 },
//       { product: "xyz", score: 8 }
//     ]
//   }

// A query abaixo selecionará apenas os documentos em que o array results contenha ao 
// menos um elemento subdocumento com o campo product igual a xyz e o campo score maior ou igual a 8:

db.survey.find(
    { results: { $elemMatch: { product: "xyz", score: { $gte: 8 } } } }
  );

//   Será retornado apenas o documento com o _id igual a 3.

//   Você não precisa utilizar o operador $elemMatch se estiver utilizando uma condição para 
//   apenas “um” campo do documento embedado. Veja:

db.survey.find(
    { results: { $elemMatch: { product: "xyz" } } }
  );

//   Como a operação acima só tem uma condição, o operador $elemMatch 
//   não se faz necessário e você pode utilizar a query abaixo:

db.survey.find(
    { "results.product": "xyz" }
  );