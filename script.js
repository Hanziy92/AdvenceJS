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


// const test = time => {
//    return new Promise(resolte => {
//       setTimeout(() => resolte(), time);
//    });
// };

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));


// ALL чекає виконання всіх промісів аж тоді спрацьовує
// Promise.all([test(1000), test(2000)]).then(() => {
//    console.log('All');
// });

// // RACE - якщо виконався перший проміс тоді спрацьовує всіх не чекає
// Promise.race([test(1000), test(2000)]).then(() => {
//    console.log('All');
// });






// API Fetch


// fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: "POST",
//       body: JSON.stringify({name:' Alex'}),
//       headers: {
//          'Content-type': 'application/json'
//       }
//    })
//    .then(response => response.json())
//    .then(json => console.log(json));

//    fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json));









// МЕТОДИ ПЕРЕБОРА МАСИВА

// filter 
// const names = ['Petro', 'Ann', 'Kristina', 'Jonh'];

// const shortNames = names.filter((name) => {
//    return name.length < 5;
// });

// console.log(shortNames);


// map
// const answers = ['PeTro', 'AnnA', 'Hello'];
// const result = answers.map(item => item.toLowerCase());
// console.log(result);


// так краще не робити
// let answers = ['PeTro', 'AnnA', 'Hello'];
// answers = answers.map(item => item.toLowerCase());
// console.log(answers);


// every/some - return bool

// const some = [4, 'qwer', 'asdfasdf'];
// [хоть один  елемент співпадає return true]
// console.log(some.some(item => typeof(item) === 'number'));

// [Всі мають бути однаковими return true]


// reduce - збирає масив в одне ціле 

// const arr = [2, 4, 6, 1, 3, 5];
// Перший аргумент це сумв всіх, другий це дані масиву
// const result = arr.reduce((sum, current) => sum + current);
// console.log(result);


// const arr = ['apple', 'pear', 'plum'];
// const result = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(result);

// const arr = [2, 4, 6, 1, 3, 5];
// третій аргумент початкове значення яке додасться в першй аргумент
// const result = arr.reduce((sum, current) => sum + current, 3);
// console.log(result);

// const obj = {
//    petro: 'persone',
//    lilay: 'persone',
//    dog: 'animal',
//    cat: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);

// console.log(newArr);



// fetch('http://localhost:3000/text')
// .then(data => data.json())
// .then(res => console.log(res));