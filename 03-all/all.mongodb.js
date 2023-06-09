// O operador $all seleciona todos os documentos em que o valor do campo é um array
//  que contenha todos os elementos especificados. Se compararmos aos operadores que 
//  já conhecemos, esse operador é equivalente ao operador $and, pois fará a comparação 
//  de todos os valores especificados, porém, para arrays.

// Utiliza-se $all sempre que é preciso passar mais de um valor de comparação, e é irrelevante
//  para a verificação tanto a existência de mais elementos no array quanto a ordem em que esses 
//  elementos estão.
use('school')
db.inventory.find({ tags: ["red", "blank"] });
use('school')
db.inventory.find({ tags: { $all: ["red", "blank"] } });

// A primeira query retornará somente os documentos em que o array tags seja exatamente
//  igual ao passado como parâmetro no filtro, ou seja, contenha apenas esses dois elementos,
//   na mesma ordem.

// Já a segunda analisará o mesmo array, independentemente da existência de outros
//  valores ou a ordem em que os elementos estejam.
use('school')

db.inventory.find(
    { tags: { $all: [ "ssl", "security" ] } }
  );

use('school')
db.inventory.find(
    {
      $and: [
        { tags: "ssl" },
        { tags: "security" }
      ]
    }
  );