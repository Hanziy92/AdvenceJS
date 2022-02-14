'use strict'

// JSON ВСІ СТРОКИ В "" - лапках
// console.log(JSON.stringify(persone)); // ПЕРЕТВОРЮЄ ДЛЯ В ФОРМАТ JSON 
// console.log(JSON.parse(JSON.stringify(persone))); // pares НАОБОРОТ з JSON 

// const persone = {
//    name: 'Alex',
//    tel: '+34444444',
//    parents: {
//       mom: 'Olga',
//       dad: 'Mike'

//    }
// };

// const clone = JSON.parse(JSON.stringify(persone));
// clone.parents.mom = 'Ann';

// console.log(persone);
// console.log(clone);



// AJAX 
const inputUah = document.querySelector('#uah'),
      inputUsd = document.querySelector('#usd');

inputUah.addEventListener('input', () => {
   const request = new XMLHttpRequest();
   request.open('GET', '/current.json'); // метод запросу argument 5 - method, url, async, login, pass.
   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
   request.send();


   // ПОДІЇ
   // request.addEventListener('readystatechange', () => {
   //    if (request.readyState === 4 && request.status === 200) {
   //       console.log(request.response);
   //       const data = JSON.parse(request.response);
   //       inputUsd.value = (+inputUah / data.current.usd).toFixed(2);
   //    } else {
   //       inputUsd.value = 'Щось пішло не так';
   //    }


      request.addEventListener('load', () => {
         if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputUah.value * data.current.usd).toFixed(2);
         } else {
            inputUsd.value = 'Щось пішло не так';
         }

   });
   // СВОЙСТВА:
   // status 
   // statusText
   // Response ВІДПОВІДЬ ВІД СЕРВЕРА
   // readyState 

   
});

