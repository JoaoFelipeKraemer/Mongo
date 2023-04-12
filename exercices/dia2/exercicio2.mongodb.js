// Vamos praticar
// Faça os desafios de 1 a 5 abaixo, sobre os operadores lógicos utilizando a coleção restaurants criada no tópico anterior.

// Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5, essa consulta também deve retornar restaurantes que não possuem o campo de avaliação.

// Selecione e faça a contagem dos restaurantes em que a avaliação seja maior ou igual a 6, ou restaurantes localizados no bairro Brooklyn.

// Selecione e faça a contagem dos restaurantes localizados nos bairros Queens, Staten Island e Brooklyn e possuem avaliação maior que 4.

// Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1, nem o campo culinária seja do tipo American.

// Selecione e faça a contagem dos restaurantes que satisfaçam ambas as condições a seguir:

// A avaliação seja maior que 6 OU menor que 10.
// Estejam localizados no bairro Brooklyn OU não possuam culinária do tipo Delicatessen.



//exer1

use('business');
db.restaurants.find({ rating: { $not: { $gt: 5 } } })

//exer2

use('business');
db.restaurants.countDocuments({ $or: [{ rating: { $gt: 6 } }, { borough: "Bronx" }] })
//31

//exer3

use('business');
db.restaurants.countDocuments({
    $and: [
        { borough: { $in: ['Queens', 'Staten Island', 'Brooklyn'] } },
        { rating: { $gt: 4} }, 
    ]
})
//20

//exer4

db.restaurants.countDocuments({ $nor: [{ rating: { $eq: 1 } }, { cuisine: "American" }] });
//0

//exer5

db.restaurants.countDocuments({
    $and: [
      { $or: [{ rating: { $gt: 6, $lt: 10 } }] },
      { $or: [{ borough: 'Brooklyn' }, { cuisine: { $ne: 'Delicatessen' } }] },
    ],
  });

  //0