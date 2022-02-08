'use strict'

// JSON ВСІ СТРОКИ В "" - лапках
// console.log(JSON.stringify(persone)); // ПЕРЕТВОРЮЄ ДЛЯ В ФОРМАТ JSON 
// console.log(JSON.parse(JSON.stringify(persone))); // pares НАОБОРОТ з JSON 


const persone = {
   name: 'Alex',
   tel: '+34444444',
   parents: {
      mom: 'Olga',
      dad: 'Mike'

   }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone);



