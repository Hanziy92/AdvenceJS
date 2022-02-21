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


   // ПОДІЇ  REST
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



/// LOCAL STORAGE

// localStorage.setItem('number', '5'); // add db

// localStorage.removeItem('number'); 

// localStorage.clear(); // clear db all

// console.log(localStorage.getItem('number')); // get out of db

// const checkbox = document.querySelector('#checkbox'),
//       form = document.querySelector('form'),
//       change = document.querySelector('#color');


// if (localStorage.getItem('isChecked')) {
//    checkbox.checked = true;
// }

// if (localStorage.getItem('bg') === 'changed') {
//    form.style.backgroundColor = 'red';
// }

// checkbox.addEventListener('change', () => {
//    localStorage.setItem('isChecked', true);
// });

// change.addEventListener('click', () => {
//    if (localStorage.getItem('bg') === 'changed') {
//       localStorage.removeItem('bg');
//       form.style.backgroundColor = '#fff';
//    } else {
//       localStorage.setItem('bg', 'changed');
//       form.style.backgroundColor = 'red';
//    }
// });

// const persone = {
//    name: 'Alex',
//    age: 25
// };

// const serializedPersone = JSON.stringify(persone);

// localStorage.setItem('Alex', serializedPersone);

// console.log(JSON.parse(localStorage.getItem('Alex')));









// РЕГУЛЯРНІ ВИРАЗИ (ддя роботи з рядками)


// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('введіть ваше імя');
// const reg = /n/ig;



// flags
// i - находить незалежно від регістра
// g - найти багато входжень
// m - багатострочний режим

// Class

// \D - не числа
// \W - не букви




// \d - шукаєм цифри
// \w - шукаєм всі букви слова
// \s - шукаєм пробіли


// console.log(ans.search(reg));


// return arr
// console.log(ans.match(reg));

// const pass = prompt('Password');

// replace - має два аргументи 1 -що ми міняєм а другий на що ми міняєм
// console.log(pass.replace(/\./g, "*")); - рекрамінування \
// console.log(pass.replace(/./g, "*"));

// console.log('12-34-56'.replace(/-/g, ":"));

// method test return bool
// const ans = prompt('введіть ваше імя');
// const reg = /n/ig;
// console.log(reg.test(ans));

// class
// const ans = prompt('введіть ваше number');
// const reg = /\d/g;
// console.log(ans.match(reg));

// const str = 'My name is R2D2';

// console.log(str.match(/\w\d\w\d/i));


// const str = 'My name is R2D2';

// console.log(str.match(/\W/i));
// console.log(str.match(/\D/ig));







// SET GET

// const persone = {
//    name: "Alex",
//    age: 25,

//    get userAge() {
//       return this.age;
//    },

//    set userAge(num) {
//       this.age = num;
//    }
// };

// console.log(persone.userAge = 30);
// console.log(persone.userAge); 





// Encapsulation

// class User {
//    constructor(name, age) {
//        this.name = name;
//        this._age = age;
//    }

//    #surname = 'Ganzii';
//    say = () => {
//        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
//    }

//    get age() {
//        return this._age;
//    }

//    set age(age) {
//        if (typeof age === 'number' && age > 0 && age < 110) {
//            this._age = age;
//        } else {
//            console.log('Error!');
//        }
//    }
// }

// const petro = new User('Petro', 27);
// console.log(petro.age);
// petro.age = 99;
// console.log(petro.age);
// petro.say()



// МОДУЛІ

// const app = '123';
// const number = 1;
// // Анонімна самовикликаюча функція
// (function(){
//    let number = 2;
//    console.log(number);
//    console.log(number + 3);
// }());

// console.log(number);


// //  обєктний інтерфейс

// const user = (function(){
//    let privat = function () {
//       console.log('I am privat');
//    };
//    return {
//       sayHello: privat
//    };
// }());

// user.sayHello();






// function myModuls() {
//    this.hello = function() {
//       console.log('Hello');
//    };

//    this.goodbye = function() {
//       console.log('bye!');
//    };
// }

// module.exports = myModuls;


// export let one = 1;

// let two = 2;

// export{two};


// // ЕКСПОРТ ПО замовчуванню тільки один раз 
// export default function sayHi() {
//     console.log('Hello');
// }



// ПРОВІРКА НА ПОМИЛКИ


// try {
//     console.log('Normal');
//     console.log(a);
//     console.log('result');
    
// } catch(error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// } finally {

// }

// console.log('Still normal'