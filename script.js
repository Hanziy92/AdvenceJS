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
// const inputUah = document.querySelector('#uah'),
//       inputUsd = document.querySelector('#usd');

// inputUah.addEventListener('input', () => {
//    const request = new XMLHttpRequest();
//    request.open('GET', '/current.json'); // метод запросу argument 5 - method, url, async, login, pass.
//    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//    request.send();


   // ПОДІЇ
   // request.addEventListener('readystatechange', () => {
   //    if (request.readyState === 4 && request.status === 200) {
   //       console.log(request.response);
   //       const data = JSON.parse(request.response);
   //       inputUsd.value = (+inputUah / data.current.usd).toFixed(2);
   //    } else {
   //       inputUsd.value = 'Щось пішло не так';
   //    }


   //    request.addEventListener('load', () => {
   //       if (request.status === 200) {
   //          const data = JSON.parse(request.response);
   //          inputUsd.value = (+inputUah.value * data.current.usd).toFixed(2);
   //       } else {
   //          inputUsd.value = 'Щось пішло не так';
   //       }

   // });
   // СВОЙСТВА:
   // status 
   // statusText
   // Response ВІДПОВІДЬ ВІД СЕРВЕРА
   // readyState 

   
// });




// PROMISE (ES6)

// console.log('get data.....');
// створити проміс
// МАй два аргумента RESOLTE - коли все добре;    REJECT - коли щось пішло не так;
// const req = new Promise(function(resolte, reject) {
//    setTimeout(() => {
//       console.log('підготовка даних.....');  
//       const product = {
//          name: 'TV',
//          prise: 2000
//       };  
//    resolte(product); 
   
//    }, 2000);
// });
// then приймає аргумент з resolte
// req.then((product) => {
//    return new Promise((resolte, reject) => {
//       setTimeout(() => {
//          product.ststus = 'order';
//          resolte(product);
//       }, 2000);
//    });
// }).then(data => {
//       data.modify = true;
//       return data;
// }).then((data) => {
//       console.log(data);
// });  

// REJECT catch - коли щось не получилось

// req.then((product) => {
//    return new Promise((resolte, reject) => {
//       setTimeout(() => {
//          product.ststus = 'order';
//          reject();
//       }, 2000);
//    });
// }).then(data => {
//       data.modify = true;
//       return data;
// }).then((data) => {
//       console.log(data);
// }).catch(() => {
//    console.error('Error');
// });


// FINNALY - запустится полюбе
// req.then((product) => {
//    return new Promise((resolte, reject) => {
//       setTimeout(() => {
//          product.ststus = 'order';
//          resolte(product);
//       }, 2000);
//    });
// }).then(data => {
//       data.modify = true;
//       return data;
// }).then((data) => {
//       console.log(data);
// }).catch(() => {
//       console.error('Error');
// }).finally(() => {
//    console.log('fannily');
// });



const test = time => {
   return new Promise(resolte => {
      setTimeout(() => resolte(), time);
   });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));


// ALL чекає виконання всіх промісів аж тоді спрацьовує
Promise.all([test(1000), test(2000)]).then(() => {
   console.log('All');
});

// RACE - якщо виконався перший проміс тоді спрацьовує всіх не чекає
Promise.race([test(1000), test(2000)]).then(() => {
   console.log('All');
});

