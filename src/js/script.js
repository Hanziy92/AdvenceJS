'use strict'

// const myModuls = require('./main');

// const myModuleIns = new myModuls();

// myModuleIns.hello();
// myModuleIns.goodbye();



//  ІПОРТ ФАЙЛІВ РІЗНИМИ СПОСОБАМИ

// import {one, two} from './main';
// console.log(`${one} and ${two}`);


// import {one as first} from './main';
// console.log(first);


// import * as data from './main';
// console.log(`${data.one} and ${data.two}`);
// data.sayHi();

// import sayHi from './main.js';
// sayHi();



// JQUERY





// import $ from 'jquery';

// $(document).ready(function() {
//    $('.list-item:first').hover(function() {
//       $(this).toggleClass('active');
//    });

//    $('.list-item:eq(2)').on('click', () => {
//       $('.image:even').fadeToggle('slow');
//    });

//    $('.list-item:eq(4)').on('click', () => {
//       $('.image:odd').animate({
//          opacity: 'toggle',
//          height: 'toggle'
//       }, 2000);
//    });
// });




// FUNC GENERATOE

// function* generatoe() {
//    yield 'p';
//    yield 'e';
//    yield 't';
//    yield 'r';
//    yield 'o';
// }

// const str = generatoe();
// // func ВИзиівається кожен раз і робить наступну дію попорядку
// console.log(str.next().value);
// console.log(str.next());

// function* count(n) {
//    for (let i = 0; i < n; i++) {
//       yield i;
//    }
// }

// for (let k of count(7)) {
//    console.log(k);
// }

// const counter = count(7);

// console.log(counter.next().value); // 0
// console.log(counter.next().value); // 1
// console.log(counter.next().value); // 2



